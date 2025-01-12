"use client"

import { useParams } from 'next/navigation'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, HelpCircle } from 'lucide-react'

const supportTopics = [
  {
    id: "remote-desktop",
    title: "Remote Desktop Support",
    description: "Get instant technical support from our experts remotely. We can access and fix your computer issues from anywhere.",
    icon: HelpCircle,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQO0RcQj3cTBuqFl8RDksDxqOIf5iJJ7Z8IA&s",
    content: `
      <h2>What is Remote Desktop Support?</h2>
      <p>Remote Desktop Support is a service that allows our technicians to access and control your computer from a remote location. This enables us to diagnose and fix issues without the need for an on-site visit.</p>

      <h2>How Does It Work?</h2>
      <ol>
        <li>You contact our support team with your issue.</li>
        <li>Our technician will guide you to download and install a secure remote access tool.</li>
        <li>You'll be given a unique session ID to share with the technician.</li>
        <li>The technician will request permission to access your computer.</li>
        <li>Once granted, they can view your screen and control your computer to diagnose and fix the issue.</li>
      </ol>

      <h2>Benefits of Remote Desktop Support</h2>
      <ul>
        <li>Quick Response Time: No need to wait for an on-site visit.</li>
        <li>Cost-Effective: Eliminates travel time and expenses.</li>
        <li>Convenience: Get support from the comfort of your home or office.</li>
        <li>Flexible Scheduling: Support can be provided outside of regular business hours.</li>
      </ul>

      <h2>Security Measures</h2>
      <p>We take your privacy and security seriously. Our remote access sessions are encrypted, and you have full control to end the session at any time. We do not store any personal data from your computer.</p>

      <h2>Common Issues We Can Resolve Remotely</h2>
      <ul>
        <li>Software installation and configuration</li>
        <li>Operating system updates and troubleshooting</li>
        <li>Virus and malware removal</li>
        <li>Network connectivity issues</li>
        <li>Printer setup and troubleshooting</li>
        <li>Email configuration</li>
        <li>Data backup and recovery guidance</li>
      </ul>

      <h2>How to Prepare for a Remote Support Session</h2>
      <ol>
        <li>Ensure you have a stable internet connection.</li>
        <li>Close any sensitive or personal applications.</li>
        <li>Have your system information ready (e.g., operating system, recent changes or errors).</li>
        <li>Be prepared to describe the issue in detail to the technician.</li>
      </ol>

      <h2>Getting Started with Remote Support</h2>
      <p>To initiate a remote support session, please contact our support team via phone or email. We'll guide you through the process and have you up and running in no time!</p>
    `
  },
  {
    id: "laptop-guide",
    title: "Laptop Safe User Guide",
    description: "Learn best practices for laptop maintenance, security, and optimal performance with our comprehensive guide.",
    icon: HelpCircle,
    image: "https://lh3.googleusercontent.com/p/AF1QipOnRjy5BtOlZIWvhR7Kjk-A7K8NqBpw5-26w9bs=s1360-w1360-h1020",
    content: `
      <h2>Laptop Safety and Maintenance Guide</h2>
      <p>Proper care and usage of your laptop can significantly extend its lifespan and maintain its performance. Follow these guidelines to keep your laptop safe and in optimal condition.</p>

      <h2>Physical Care</h2>
      <ul>
        <li>Keep liquids away from your laptop to prevent spills.</li>
        <li>Use a padded laptop bag for transportation to protect against bumps and drops.</li>
        <li>Clean the screen with a soft, lint-free cloth. Avoid using harsh chemicals.</li>
        <li>Keep vents clear to prevent overheating. Don't use on soft surfaces that can block airflow.</li>
        <li>Handle the laptop gently, especially when opening and closing the lid.</li>
      </ul>

      <h2>Battery Care</h2>
      <ul>
        <li>Avoid extreme temperatures, which can damage the battery.</li>
        <li>For long-term storage, keep the battery charge around 50%.</li>
        <li>Calibrate your battery every few months for accurate charge readings.</li>
        <li>Avoid leaving your laptop plugged in constantly, as this can reduce battery lifespan.</li>
      </ul>

      <h2>Software Maintenance</h2>
      <ul>
        <li>Keep your operating system and software up to date.</li>
        <li>Use antivirus software and keep it updated.</li>
        <li>Regularly back up your important data.</li>
        <li>Uninstall unused programs to free up space and resources.</li>
        <li>Perform disk cleanup and defragmentation (for HDDs) regularly.</li>
      </ul>

      <h2>Security Best Practices</h2>
      <ul>
        <li>Use a strong, unique password for your user account.</li>
        <li>Enable two-factor authentication where possible.</li>
        <li>Be cautious when using public Wi-Fi networks. Use a VPN for added security.</li>
        <li>Keep your firewall enabled.</li>
        <li>Be wary of phishing emails and suspicious downloads.</li>
      </ul>

      <h2>Ergonomics and Health</h2>
      <ul>
        <li>Position your laptop screen at eye level to avoid neck strain.</li>
        <li>Use an external keyboard and mouse for extended use.</li>
        <li>Take regular breaks to rest your eyes and stretch.</li>
        <li>Ensure proper lighting to reduce eye strain.</li>
      </ul>

      <h2>Troubleshooting Common Issues</h2>
      <ol>
        <li>Slow performance: Try closing unnecessary programs and performing a disk cleanup.</li>
        <li>Overheating: Clean vents and ensure proper ventilation. Consider using a cooling pad.</li>
        <li>Battery draining quickly: Check for power-hungry applications and adjust power settings.</li>
        <li>Wi-Fi connectivity issues: Update network drivers and reset your router if necessary.</li>
      </ol>

      <h2>When to Seek Professional Help</h2>
      <p>While many issues can be resolved with basic troubleshooting, seek professional assistance if you encounter:</p>
      <ul>
        <li>Hardware failures or strange noises</li>
        <li>Persistent software issues or frequent crashes</li>
        <li>Signs of malware that your antivirus can't remove</li>
        <li>Physical damage to the laptop</li>
      </ul>

      <p>By following these guidelines, you can ensure that your laptop remains in good condition, performs optimally, and serves you well for years to come. If you have any questions or need professional assistance, don't hesitate to contact our support team.</p>
    `
  },
  {
    id: "computer-guide",
    title: "Computer Safe User Guide",
    description: "Essential security tips and maintenance guidelines to keep your computer protected and running smoothly.",
    icon: HelpCircle,
    image: "https://lh3.googleusercontent.com/p/AF1QipNB1JabAqYKGHsJQODFlMhNq_QeQ6WmzLzuuwl_=s1360-w1360-h1020",
    content: `
      <h2>Computer Safety and Maintenance Guide</h2>
      <p>Proper care and maintenance of your computer are essential for its longevity and optimal performance. This guide covers key aspects of computer safety and maintenance to help you keep your system in top condition.</p>

      <h2>Hardware Maintenance</h2>
      <ul>
        <li>Keep your computer clean. Dust can cause overheating and component failure.</li>
        <li>Use compressed air to clean keyboards, vents, and fans regularly.</li>
        <li>Ensure proper ventilation around your computer to prevent overheating.</li>
        <li>Use a surge protector to guard against power fluctuations.</li>
        <li>If you have a desktop, consider opening the case annually for a thorough cleaning (if you're comfortable doing so).</li>
      </ul>

      <h2>Software Maintenance</h2>
      <ul>
        <li>Keep your operating system and software up to date.</li>
        <li>Regularly run disk cleanup and disk defragmentation (for HDDs).</li>
        <li>Uninstall unused programs to free up space and resources.</li>
        <li>Use antivirus software and keep it updated.</li>
        <li>Perform regular system backups to protect your data.</li>
      </ul>

      <h2>Security Best Practices</h2>
      <ul>
        <li>Use strong, unique passwords for all accounts.</li>
        <li>Enable two-factor authentication where available.</li>
        <li>Keep your firewall enabled.</li>
        <li>Be cautious when opening email attachments or clicking on links.</li>
        <li>Avoid downloading software from untrusted sources.</li>
        <li>Use a VPN when connecting to public Wi-Fi networks.</li>
      </ul>

      <h2>Data Management</h2>
      <ul>
        <li>Organize your files and folders for easy access.</li>
        <li>Regularly backup important data to an external drive or cloud storage.</li>
        <li>Securely delete sensitive files when no longer needed.</li>
        <li>Consider encrypting important files for added security.</li>
      </ul>

      <h2>Performance Optimization</h2>
      <ul>
        <li>Limit the number of programs that start automatically with Windows.</li>
        <li>Close unused programs and browser tabs to free up memory.</li>
        <li>Consider upgrading hardware (like adding RAM or switching to an SSD) for older systems.</li>
        <li>Regularly clear your browser cache and temporary files.</li>
      </ul>

      <h2>Ergonomics and Health</h2>
      <ul>
        <li>Position your monitor at eye level and about an arm's length away.</li>
        <li>Use an ergonomic keyboard and mouse to prevent strain.</li>
        <li>Take regular breaks to rest your eyes and stretch.</li>
        <li>Ensure proper lighting in your workspace to reduce eye strain.</li>
      </ul>

      <h2>Troubleshooting Common Issues</h2>
      <ol>
        <li>Slow performance: Check for resource-heavy programs, perform disk cleanup, and consider malware scans.</li>
        <li>Blue Screen of Death: Note the error message, check for recent hardware or software changes, and update drivers.</li>
        <li>Internet connectivity issues: Restart your router, check network settings, and ensure your network drivers are up to date.</li>
        <li>Strange noises: This could indicate hardware issues. Seek professional help if you hear unusual sounds from your computer.</li>
      </ol>

      <h2>When to Seek Professional Help</h2>
      <p>While many issues can be resolved with basic troubleshooting, consider professional assistance if you encounter:</p>
      <ul>
        <li>Hardware failures or persistent error messages</li>
        <li>Suspected malware infections that you can't remove</li>
        <li>Data recovery needs</li>
        <li>Significant performance degradation that basic steps don't resolve</li>
      </ul>

      <p>By following these guidelines, you can maintain your computer's health, ensure its longevity, and optimize its performance. Regular maintenance not only keeps your system running smoothly but also helps prevent costly repairs or data loss in the future.</p>
    `
  },
  {
    id: "buying-guide",
    title: "Guidelines to Buy a Best Computer",
    description: "Expert recommendations and tips for choosing the right computer components for your needs and budget.",
    icon: HelpCircle,
    image: "https://lh3.googleusercontent.com/p/AF1QipNepyHO8f4kPWJQ3EVyCfGagzv8dpMiRyKR0Fj-=s1360-w1360-h1020",
    content: `
      <h2>Comprehensive Guide to Buying the Best Computer</h2>
      <p>Choosing the right computer can be overwhelming with the multitude of options available. This guide will help you navigate the process and make an informed decision based on your needs and budget.</p>

      <h2>Determine Your Needs</h2>
      <p>Before looking at specifications, consider what you'll primarily use the computer for:</p>
      <ul>
        <li>Basic tasks (web browsing, email, word processing): Entry-level specs will suffice.</li>
        <li>Media consumption: Focus on display quality and audio.</li>
        <li>Gaming: Prioritize GPU, CPU, and RAM.</li>
        <li>Content creation: Look for powerful CPU, ample RAM, and possibly a dedicated GPU.</li>
        <li>Business: Consider portability, battery life, and security features.</li>
      </ul>

      <h2>Key Components to Consider</h2>
      
      <h3>1. Processor (CPU)</h3>
      <p>The brain of your computer. For most users, an Intel Core i5 or AMD Ryzen 5 is a good balance. Power users might want to consider i7/i9 or Ryzen 7/9.</p>
      
      <h3>2. Random Access Memory (RAM)</h3>
      <p>More RAM allows for smoother multitasking.</p>
      <ul>
        <li>8GB: Minimum for most users</li>
        <li>16GB: Recommended for future-proofing</li>
        <li>32GB or more: For power users, content creators, and heavy multitaskers</li>
      </ul>
      
      <h3>3. Storage</h3>
      <p>SSDs offer faster performance than HDDs but at a higher cost per gigabyte.</p>
      <ul>
        <li>SSD: At least 256GB for the operating system and key applications</li>
        <li>HDD: Consider adding a large HDD for file storage if needed</li>
      </ul>
      
      <h3>4. Graphics Card (GPU)</h3>
      <p>Integrated graphics are sufficient for basic tasks. Dedicated GPUs are necessary for gaming, video editing, and 3D rendering.</p>
      
      <h3>5. Display</h3>
      <p>Consider resolution, size, and panel type (IPS for better color accuracy, TN for faster response times).</p>
      
      <h3>6. Connectivity</h3>
      <p>Ensure it has the ports you need (USB, HDMI, Ethernet, etc.) and supports Wi-Fi 6 for future-proofing.</p>

      <h2>Laptop vs Desktop</h2>
      <h3>Laptop Pros:</h3>
      <ul>
        <li>Portability</li>
        <li>All-in-one solution</li>
        <li>Lower power consumption</li>
      </ul>
      <h3>Desktop Pros:</h3>
      <ul>
        <li>More powerful components</li>
        <li>Easier to upgrade and repair</li>
        <li>Better value for money in terms of performance</li>
      </ul>

      <h2>Operating System</h2>
      <ul>
        <li>Windows: Most common, widest software compatibility</li>
        <li>macOS: User-friendly, good for creative professionals (only on Apple hardware)</li>
        <li>Linux: Free, open-source, highly customizable but may have a steeper learning curve</li>
      </ul>

      <h2>Brand Considerations</h2>
      <p>While specs are important, also consider:</p>
      <ul>
        <li>Build quality and durability</li>
        <li>Customer support and warranty</li>
        <li>User reviews and reliability ratings</li>
      </ul>

      <h2>Budget Considerations</h2>
      <ul>
        <li>Entry-level: $300-$600</li>
        <li>Mid-range: $600-$1000</li>
        <li>High-end: $1000+</li>
      </ul>
      <p>Remember, the most expensive option isn't always the best for your needs.</p>

      <h2>Where to Buy</h2>
      <ul>
        <li>Physical stores: Allows hands-on testing but may have limited selection</li>
        <li>Online retailers: Wider selection and often better prices, but no physical inspection before purchase</li>
        <li>Manufacturer websites: Can offer customization options</li>
      </ul>

      <h2>Final Tips</h2>
      <ul>
        <li>Don't overspend on features you won't use</li>
        <li>Consider future needs and leave room for upgrades if possible</li>
        <li>Read professional reviews and user feedback before making a decision</li>
        <li>Check return policies and warranty information</li>
      </ul>

      <p>Remember, the best computer for you is one that meets your specific needs and fits within your budget. Don't hesitate to seek expert advice if you're unsure about any aspect of your purchase.</p>
    `
  },
  {
    id: "software-support",
    title: "Software Installation Support",
    description: "Professional assistance with software installation, updates, and troubleshooting for all your applications.",
    icon: HelpCircle,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2o6ktMYh9oQV0Wz447SCm7_FePAKQycMJQ&s",
    content: `
      <h2>Software Installation and Support Guide</h2>
      <p>Proper software installation and management are crucial for maintaining a stable and efficient computer system. This guide covers key aspects of software installation, updates, and troubleshooting to help you manage your applications effectively.</p>

      <h2>Software Installation Best Practices</h2>
      <ol>
        <li>Always download software from official sources or trusted repositories.</li>
        <li>Verify the system requirements before installation to ensure compatibility.</li>
        <li>Close other running applications before installing new software.</li>
        <li>Read through the installation wizard carefully and choose custom installation when available to control what gets installed.</li>
        <li>Be wary of bundled software or toolbars that you didn't intend to install.</li>
        <li>Create a system restore point before installing major applications.</li>
      </ol>

      <h2>Keeping Software Updated</h2>
      <ul>
        <li>Enable automatic updates for your operating system and security software.</li>
        <li>Regularly check for updates for other installed applications.</li>
        <li>Consider using a software update manager to keep track of updates for multiple applications.</li>
        <li>Be cautious about updating mission-critical software without testing first.</li>
      </ul>

      <h2>Common Installation Issues and Solutions</h2>
      <h3>1. Insufficient Disk Space</h3>
      <p>Solution: Free up space by uninstalling unnecessary programs or files, or upgrade your storage.</p>

      <h3>2. Compatibility Issues</h3>
      <p>Solution: Check for compatibility mode options or look for alternative software versions.</p>

      <h3>3. Incomplete Downloads</h3>
      <p>Solution: Re-download the installation file, preferably using a download manager.</p>

      <h3>4. Permission Errors</h3>
      <p>Solution: Ensure you have administrator rights. Try running the installer as an administrator.</p>

      <h3>5. Conflicting Software</h3>
      <p>Solution: Temporarily disable antivirus software during installation, or uninstall conflicting applications.</p>

      <h2>Troubleshooting Software Issues</h2>
      <ol>
        <li>Restart the application and/or your computer.</li>
        <li>Check for and install any available updates.</li>
        <li>Verify that your system meets the minimum requirements for the software.</li>
        <li>Run the application in compatibility mode if it's designed for an older OS version.</li>
        <li>Uninstall and reinstall the software if persistent issues occur.</li>
        <li>Check online forums or the software's support page for known issues and solutions.</li>
      </ol>

      <h2>Uninstalling Software Safely</h2>
      <ul>
        <li>Use the built-in uninstaller in Windows Control Panel or Settings.</li>
        <li>For thorough removal, consider using third-party uninstaller tools.</li>
        <li>After uninstallation, check for and remove any leftover files or registry entries.</li>
        <li>Restart your computer after uninstalling major applications.</li>
      </ul>

      <h2>Managing Software Licenses</h2>
      <ul>
        <li>Keep a record of your software licenses, including product keys.</li>
        <li>Store digital licenses and keys in a secure, backed-up location.</li>
        <li>Be aware of the terms of use, especially for business software.</li>
        <li>Consider using a license management tool for multiple applications.</li>
      </ul>

      <h2>When to Seek Professional Help</h2>
      <p>While many software issues can be resolved with basic troubleshooting, consider professional assistance if:</p>
      <ul>
        <li>You encounter persistent errors that basic troubleshooting doesn't resolve.</li>
        <li>You need to install complex enterprise software.</li>
        <li>You're unsure about potential conflicts with existing software.</li>
        <li>You need to recover data after a failed installation or uninstallation.</li>
        <li>You're dealing with potential malware or security issues related to software.</li>
      </ul>

      <p>Remember, proper software management is key to maintaining a stable and efficient computer system. Regular maintenance, careful installation practices, and prompt addressing of issues can save time and prevent more serious problems down the line. If you're ever in doubt, don't hesitate to reach out to our support team for expert assistance.</p>
    `
  }
]

export default function SupportTopic() {
  const params = useParams()
  const topic = supportTopics.find(topic => topic.id === params.topic)

  if (!topic) {
    return <div>Topic not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background dark:from-blue-900/30 dark:via-background dark:to-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-6">
                <Badge>{topic.title}</Badge>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">{topic.title}</CardTitle>
              <p className="text-muted-foreground mb-6">{topic.description}</p>
              <img src={topic.image} alt={topic.title} className="w-full h-64 object-cover rounded-lg mb-6" />
              <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: topic.content }} />
              <div className="mt-8">
                <Button asChild>
                  <Link href="/support">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Support
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

