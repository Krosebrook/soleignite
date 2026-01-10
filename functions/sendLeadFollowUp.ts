import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const user = await base44.auth.me();

        if (!user) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { leadId } = await req.json();

        if (!leadId) {
            return Response.json({ error: 'Lead ID is required' }, { status: 400 });
        }

        // Get the lead details
        const leads = await base44.entities.Lead.filter({ id: leadId });
        
        if (!leads || leads.length === 0) {
            return Response.json({ error: 'Lead not found' }, { status: 404 });
        }

        const lead = leads[0];

        // Check if follow-up was already sent
        if (lead.follow_up_sent) {
            return Response.json({ 
                message: 'Follow-up already sent for this lead',
                skipped: true 
            });
        }

        // Build personalized email based on industry and project type
        const emailContent = buildEmailContent(lead);

        // Send email using Base44's built-in integration
        await base44.integrations.Core.SendEmail({
            from_name: "Sole Much Better Team",
            to: lead.email,
            subject: emailContent.subject,
            body: emailContent.body
        });

        // Mark follow-up as sent
        await base44.entities.Lead.update(leadId, {
            follow_up_sent: true
        });

        return Response.json({ 
            success: true,
            message: 'Follow-up email sent successfully',
            emailType: emailContent.type
        });

    } catch (error) {
        console.error('Error sending follow-up:', error);
        return Response.json({ 
            error: error.message,
            details: 'Failed to send follow-up email'
        }, { status: 500 });
    }
});

function buildEmailContent(lead) {
    const { contact_name, company_name, industry, project_type } = lead;
    
    // Industry-specific messaging
    const industryContent = {
        tech_conferences: {
            focus: "tech conference activations",
            examples: "custom sneakers for developer events, branded apparel for product launches, and interactive booth experiences",
            caseStudy: "We recently delivered 2,000 custom sneakers for TechFlow Conference, creating massive social media buzz and attendee engagement."
        },
        sports: {
            focus: "sports and athletic partnerships",
            examples: "performance custom footwear, team apparel, championship merchandise, and stadium activations",
            caseStudy: "Our work with Athletic Performance Co. included a multi-city activation tour that increased brand awareness by 150%."
        },
        lifestyle: {
            focus: "lifestyle brand collaborations",
            examples: "limited edition custom products, influencer packages, and retail partnerships",
            caseStudy: "Our lifestyle brand collaborations consistently sell out within hours, creating authentic brand connections."
        },
        cpg: {
            focus: "CPG brand activations",
            examples: "product launch merchandise, retail promotional items, and consumer engagement campaigns",
            caseStudy: "We've partnered with Fortune 500 CPG companies to create memorable product launches across 25+ countries."
        },
        other: {
            focus: "custom brand solutions",
            examples: "tailored merchandise, branded products, and creative activations",
            caseStudy: "Our diverse portfolio spans industries from finance to entertainment, always delivering exceptional results."
        }
    };

    // Project type-specific next steps
    const projectContent = {
        custom_shoes: {
            nextSteps: "Our footwear specialists will reach out within 24 hours to discuss material options, design concepts, and production timelines.",
            timeline: "Custom shoe projects typically take 8-12 weeks from concept to delivery."
        },
        apparel: {
            nextSteps: "We'll schedule a call to review fabric options, sustainability choices, and customization techniques that align with your brand.",
            timeline: "Apparel projects can be completed in 6-10 weeks depending on quantity and complexity."
        },
        branding_solutions: {
            nextSteps: "Our brand strategy team will prepare a comprehensive proposal including creative concepts and implementation plans.",
            timeline: "Branding projects are scoped individually but typically range from 4-8 weeks."
        },
        full_activation: {
            nextSteps: "We'll assemble a dedicated project team and schedule a discovery workshop to map out your complete activation strategy.",
            timeline: "Full activations require 12-16 weeks for optimal planning and execution."
        },
        consultation: {
            nextSteps: "We'll send you a calendar link to book a free 30-minute strategy consultation with one of our senior team members.",
            timeline: "Consultations can be scheduled within 48 hours."
        }
    };

    const industryInfo = industryContent[industry] || industryContent.other;
    const projectInfo = projectContent[project_type] || projectContent.consultation;

    const subject = `${contact_name}, let's bring your ${industryInfo.focus} vision to life`;

    const body = `
Hi ${contact_name},

Thank you for reaching out to Sole Much Better! We're excited to learn more about ${company_name}'s project.

🎯 YOUR PROJECT FOCUS
Based on your interest in ${industryInfo.focus}, we specialize in creating ${industryInfo.examples}.

💡 RELEVANT EXPERIENCE
${industryInfo.caseStudy}

📋 NEXT STEPS
${projectInfo.nextSteps}

⏱️ TIMELINE
${projectInfo.timeline}

🌟 WHY SOLE MUCH BETTER?
• Chicago HQ with global activation capabilities
• 950+ successful projects delivered
• 50+ Fortune 500 clients
• 99% client satisfaction rate
• End-to-end white-glove service

Our team will review your submission and follow up with a personalized proposal within 24 hours. In the meantime, feel free to reply to this email with any additional questions or requirements.

Looking forward to creating something extraordinary together!

Best regards,
The Sole Much Better Team

---
Sole Much Better
Chicago HQ • Global Activations
hello@solemuchbetter.com

P.S. Want to move faster? Book a call directly: [Calendar Link]
    `.trim();

    return {
        subject,
        body,
        type: `${industry}_${project_type}`
    };
}