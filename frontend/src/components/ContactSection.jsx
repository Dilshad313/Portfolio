import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react' 
import React, { useState } from 'react'
import {cn} from '@/lib/utils';
import { useToast } from '@/hooks/use-toast'; 

const ContactSection = () => {
    const {toast} = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    // Your email where you want to receive messages
    const YOUR_EMAIL = "diluk2005786@gmail.com" // Replace with your actual email

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Removed EmailJS attempt as placeholders make it unreliable; directly use mailto fallback for reliability
            // Fallback: Open default email client
            const subject = encodeURIComponent(`Message from ${formData.name}`)
            const body = encodeURIComponent(
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n\n` +
                `Message:\n${formData.message}`
            )
            
            window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`
            
            toast({
                title: "Opening email client",
                description: "Your default email app will open with the message pre-filled. Please send it manually."
            })

            // Reset form
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('Error preparing email:', error)
            toast({
                title: "Error",
                description: "Failed to prepare email. Please try contacting directly.",
                variant: "destructive"
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'>Touch</span>
                </h2>
                
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Have a Project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                        <div className='space-y-6'>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='h-6 w-6 text-primary'/>
                                </div>
                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a href="mailto:diluk2005786@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                        diluk2005786@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className='h-6 w-6 text-primary'/>
                                </div>
                                <div>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a href="tel:+918129645054" className='text-muted-foreground hover:text-primary transition-colors'>
                                        +91 8129645054 {/* Fixed phone number consistency */}
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className='h-6 w-6 text-primary'/>
                                </div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <span className='text-muted-foreground'>
                                        Kottappuram, Mannarkkad, Palakkad
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect With Me</h4>
                            <div className='flex space-x-4'>
                                <a href="https://www.linkedin.com/in/dilshad-k-66a9a5321/" target='_blank' rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                                    <Linkedin className="h-5 w-5 text-primary" />
                                </a>
                                <a href="https://twitter.com/your_twitter" target='_blank' rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                                    <Twitter className="h-5 w-5 text-primary" />
                                </a>
                                <a href="https://www.instagram.com/dilshad_mkd_3048/" target='_blank' rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                                    <Instagram className="h-5 w-5 text-primary" />
                                </a>
                                {/* Removed Twitch as link was invalid */}
                            </div>
                        </div>
                    </div>

                    <div className='bg-card p-8 rounded-lg shadow-lg'>
                        <h3 className='text-2xl font-semibold mb-6'>Send a message</h3>

                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                                <input 
                                    type="text" 
                                    id='name' 
                                    name='name' 
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required 
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary'
                                    placeholder='John Doe'
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                                <input 
                                    type="email" 
                                    id='email' 
                                    name='email' 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required 
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary'
                                    placeholder='john@example.com'
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message</label>
                                <textarea 
                                    id='message' 
                                    name='message' 
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required 
                                    rows={5}
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none'
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button 
                                disabled={isSubmitting} 
                                type='submit' 
                                className={cn(
                                    "cosmic-button w-full cursor-pointer flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                )}
                            >
                                {isSubmitting ? "Preparing..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection