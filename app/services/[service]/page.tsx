"use client"

import { useParams } from 'next/navigation'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Check } from 'lucide-react'

const services = [
  {
    id: "computer-sales",
    title: "Computer Sales & Services",
    description: "Get the latest desktop computers and professional repair services for all brands.",
    image: "https://lh3.googleusercontent.com/p/AF1QipNlru-XmYPSdXicS3WNDwXog_tu57Gg5B_VzASD=s1360-w1360-h1020",
    content: `
      <h2>Computer Sales & Services</h2>
      <p>At DK Tech Solutions, we offer comprehensive computer sales and services to meet all your technology needs. Whether you're looking for a new computer or need repairs for your existing system, our expert team is here to help.</p>

      <h2>Our Computer Sales Services</h2>
      <ul>
        <li>New Desktop Computers</li>
        <li>Custom-Built PCs</li>
        <li>All-in-One Systems</li>
        <li>Gaming Computers</li>
        <li>Business Workstations</li>
        <li>Computer Peripherals and Accessories</li>
      </ul>

      <h2>Computer Repair Services</h2>
      <ul>
        <li>Hardware Repairs and Upgrades</li>
        <li>Software Troubleshooting</li>
        <li>Virus and Malware Removal</li>
        <li>Data Recovery</li>
        <li>System Optimization</li>
        <li>Network Setup and Configuration</li>
      </ul>

      <h2>Why Choose Our Computer Services?</h2>
      <ul>
        <li>Expert Technicians: Our team is highly trained and experienced in all aspects of computer repair and maintenance.</li>
        <li>Quality Products: We offer only genuine, high-quality computers and components from trusted manufacturers.</li>
        <li>Competitive Pricing: Get the best value for your money with our competitive prices and service rates.</li>
        <li>Quick Turnaround: We understand the importance of your computer and strive to complete repairs as quickly as possible.</li>
        <li>Warranty Coverage: All our products and services come with warranty protection for your peace of mind.</li>
      </ul>

      <h2>Our Process</h2>
      <ol>
        <li>Initial Consultation: We discuss your needs and requirements</li>
        <li>Diagnosis: For repairs, we thoroughly diagnose the issue</li>
        <li>Solution Proposal: We provide detailed recommendations and quotes</li>
        <li>Implementation: We proceed with the sale or repair</li>
        <li>Quality Check: All systems are tested before delivery</li>
        <li>After-Sales Support: We provide ongoing support and warranty service</li>
      </ol>

      <h2>Additional Services</h2>
      <ul>
        <li>Regular Maintenance Plans</li>
        <li>System Upgrades</li>
        <li>Data Backup Solutions</li>
        <li>Network Setup</li>
        <li>Security Solutions</li>
      </ul>
    `
  },
  {
    id: "amc-managed",
    title: "AMC Managed Services",
    description: "Comprehensive annual maintenance contracts for your IT infrastructure.",
    image: "https://raw.githubusercontent.com/VedantDeore/DKTechSolutions/refs/heads/main/Servies-AMC.webp",
    content: `
      <h2>AMC Managed Services</h2>
      <p>Our Annual Maintenance Contract (AMC) services provide comprehensive IT support and maintenance for your business infrastructure. We ensure your systems run smoothly and efficiently throughout the year.</p>

      <h2>AMC Service Coverage</h2>
      <ul>
        <li>Regular System Maintenance</li>
        <li>Hardware Support</li>
        <li>Software Support</li>
        <li>Network Management</li>
        <li>Security Updates</li>
        <li>24/7 Technical Support</li>
      </ul>

      <h2>Benefits of Our AMC Services</h2>
      <ul>
        <li>Predictable IT Costs: Fixed annual fee for all covered services</li>
        <li>Proactive Maintenance: Prevent issues before they occur</li>
        <li>Reduced Downtime: Quick response to technical issues</li>
        <li>Regular Updates: Keep your systems current and secure</li>
        <li>Priority Support: Dedicated support team for AMC clients</li>
        <li>Cost Savings: Reduce overall IT maintenance costs</li>
      </ul>

      <h2>Service Levels</h2>
      <h3>Basic AMC</h3>
      <ul>
        <li>Quarterly preventive maintenance</li>
        <li>Basic hardware support</li>
        <li>Software troubleshooting</li>
        <li>Email and phone support</li>
      </ul>

      <h3>Premium AMC</h3>
      <ul>
        <li>Monthly preventive maintenance</li>
        <li>Comprehensive hardware support</li>
        <li>Advanced software support</li>
        <li>24/7 priority support</li>
        <li>On-site support</li>
        <li>Network maintenance</li>
      </ul>

      <h2>Our AMC Process</h2>
      <ol>
        <li>Initial Assessment: Evaluate your IT infrastructure</li>
        <li>Custom Plan: Design an AMC plan that fits your needs</li>
        <li>Implementation: Set up monitoring and maintenance schedules</li>
        <li>Regular Maintenance: Perform scheduled maintenance tasks</li>
        <li>Continuous Monitoring: Track system performance</li>
        <li>Reporting: Provide regular service reports</li>
      </ol>

      <h2>Additional Features</h2>
      <ul>
        <li>Asset Management</li>
        <li>Performance Monitoring</li>
        <li>Security Audits</li>
        <li>Backup Management</li>
        <li>Vendor Management</li>
      </ul>
    `
  },
  {
    id: "os-installation",
    title: "OS Installation & Virus Cleaning",
    description: "Professional OS installation and virus removal services to keep your system secure.",
    image: "https://scot-comp.co.uk/wp-content/uploads/2024/12/will-a-clean-install-remove-viruses.jpg",
    content: `
      <h2>OS Installation & Virus Cleaning Services</h2>
      <p>We provide professional operating system installation and virus removal services to ensure your computer runs smoothly and securely. Our expert technicians use the latest tools and techniques to protect your system from threats.</p>

      <h2>Operating System Installation</h2>
      <h3>Services Offered:</h3>
      <ul>
        <li>Fresh OS Installation</li>
        <li>OS Upgrades</li>
        <li>Driver Installation</li>
        <li>Software Package Installation</li>
        <li>System Optimization</li>
        <li>Data Backup and Migration</li>
      </ul>

      <h3>Supported Operating Systems:</h3>
      <ul>
        <li>Windows 11</li>
        <li>Windows 10</li>
        <li>Windows 8.1</li>
        <li>Windows 7</li>
        <li>Various Linux Distributions</li>
        <li>macOS</li>
      </ul>

      <h2>Virus Cleaning Services</h2>
      <h3>Our Process:</h3>
      <ol>
        <li>System Scan: Thorough scanning for viruses and malware</li>
        <li>Threat Detection: Identify all types of malicious software</li>
        <li>Virus Removal: Safe removal of detected threats</li>
        <li>System Cleanup: Remove temporary files and optimize performance</li>
        <li>Protection Setup: Install and configure antivirus software</li>
        <li>Prevention Guide: Provide tips to prevent future infections</li>
      </ol>

      <h3>Types of Threats We Handle:</h3>
      <ul>
        <li>Viruses</li>
        <li>Malware</li>
        <li>Spyware</li>
        <li>Ransomware</li>
        <li>Adware</li>
        <li>Rootkits</li>
      </ul>

      <h2>Additional Services</h2>
      <ul>
        <li>Security Software Installation</li>
        <li>Firewall Configuration</li>
        <li>System Performance Optimization</li>
        <li>Regular Security Updates</li>
        <li>Data Recovery from Infected Systems</li>
        <li>Security Best Practices Training</li>
      </ul>

      <h2>Why Choose Our Services?</h2>
      <ul>
        <li>Experienced Technicians</li>
        <li>Latest Security Tools</li>
        <li>Quick Service</li>
        <li>Affordable Rates</li>
        <li>Guaranteed Results</li>
        <li>After-Service Support</li>
      </ul>
    `
  },
  {
    id: "laptop-sales",
    title: "Laptop Sales & Services",
    description: "Wide range of laptops and expert repair services for all models.",
    image: "https://lh3.googleusercontent.com/p/AF1QipNepyHO8f4kPWJQ3EVyCfGagzv8dpMiRyKR0Fj-=s1360-w1360-h1020",
    content: `
      <h2>Laptop Sales & Services</h2>
      <p>We offer a comprehensive range of laptop sales and repair services. Whether you're looking to buy a new laptop or need repairs for your existing one, our expert team is here to help.</p>

      <h2>Laptop Sales</h2>
      <h3>Available Brands:</h3>
      <ul>
        <li>HP</li>
        <li>Dell</li>
        <li>Lenovo</li>
        <li>Acer</li>
        <li>ASUS</li>
        <li>Apple MacBook</li>
      </ul>

      <h3>Categories:</h3>
      <ul>
        <li>Business Laptops</li>
        <li>Gaming Laptops</li>
        <li>Student Laptops</li>
        <li>Ultrabooks</li>
        <li>2-in-1 Convertibles</li>
        <li>Budget Laptops</li>
      </ul>

      <h2>Laptop Repair Services</h2>
      <h3>Hardware Repairs:</h3>
      <ul>
        <li>Screen Replacement</li>
        <li>Keyboard Replacement</li>
        <li>Battery Replacement</li>
        <li>Hard Drive/SSD Upgrade</li>
        <li>RAM Upgrade</li>
        <li>Motherboard Repair</li>
        <li>Power Jack Repair</li>
        <li>Cooling System Service</li>
      </ul>

      <h3>Software Services:</h3>
      <ul>
        <li>OS Installation</li>
        <li>Data Recovery</li>
        <li>Virus Removal</li>
        <li>Driver Updates</li>
        <li>Software Installation</li>
        <li>System Optimization</li>
      </ul>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>Certified Technicians</li>
        <li>Genuine Parts</li>
        <li>Quick Service</li>
        <li>Competitive Pricing</li>
        <li>Warranty on Services</li>
        <li>Post-Service Support</li>
      </ul>

      <h2>Additional Services</h2>
      <ul>
        <li>Laptop AMC Services</li>
        <li>Corporate Solutions</li>
        <li>Data Backup Services</li>
        <li>Accessories Sales</li>
        <li>Extended Warranty Options</li>
      </ul>
    `
  },
  {
    id: "data-recovery",
    title: "Data Recovery",
    description: "Professional data recovery services for all storage devices.",
    image: "https://www.provendata.com/wp-content/uploads/2023/09/How-Does-a-Hard-Drive-Data-Recovery-Service-Work-What-to-Expect-from-the-Hard-Drive-Recovery-Process.jpg",
    content: `
      <h2>Data Recovery Services</h2>
      <p>We specialize in recovering lost or damaged data from all types of storage devices. Our expert team uses advanced tools and techniques to retrieve your valuable information safely and securely.</p>

      <h2>Supported Storage Devices</h2>
      <ul>
        <li>Hard Disk Drives (HDD)</li>
        <li>Solid State Drives (SSD)</li>
        <li>USB Flash Drives</li>
        <li>Memory Cards</li>
        <li>External Hard Drives</li>
        <li>RAID Arrays</li>
      </ul>

      <h2>Types of Data Recovery</h2>
      <h3>Logical Recovery:</h3>
      <ul>
        <li>Accidental File Deletion</li>
        <li>Formatted Drives</li>
        <li>Corrupted File Systems</li>
        <li>Partition Loss</li>
        <li>Operating System Crashes</li>
      </ul>

      <h3>Physical Recovery:</h3>
      <ul>
        <li>Bad Sectors</li>
        <li>Head Crashes</li>
        <li>Motor Failure</li>
        <li>Electronic Failure</li>
        <li>Fire or Water Damage</li>
      </ul>

      <h2>Our Recovery Process</h2>
      <ol>
        <li>Initial Diagnosis: Evaluate the extent of data loss</li>
        <li>Recovery Assessment: Determine the best recovery method</li>
        <li>Cost Estimation: Provide detailed quote</li>
        <li>Recovery Procedure: Implement appropriate recovery techniques</li>
        <li>Data Verification: Ensure recovered data integrity</li>
        <li>Data Return: Safely transfer recovered data</li>
      </ol>

      <h2>Features of Our Service</h2>
      <ul>
        <li>Free Initial Consultation</li>
        <li>Clean Room Facility</li>
        <li>Advanced Recovery Tools</li>
        <li>Secure Data Handling</li>
        <li>Confidentiality Guaranteed</li>
        <li>No Recovery, No Fee Policy</li>
      </ul>

      <h2>Additional Services</h2>
      <ul>
        <li>Emergency Recovery Service</li>
        <li>Remote Recovery Support</li>
        <li>Backup Solutions</li>
        <li>Data Migration</li>
        <li>Secure Data Destruction</li>
      </ul>

      <h2>Why Choose Our Recovery Service?</h2>
      <ul>
        <li>Experienced Technicians</li>
        <li>High Success Rate</li>
        <li>Quick Turnaround Time</li>
        <li>Competitive Pricing</li>
        <li>Secure Facilities</li>
        <li>Customer Confidentiality</li>
      </ul>
    `
  },
  {
    id: "networking",
    title: "Home & Office Networking",
    description: "Complete networking solutions for homes and businesses.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgi3Th4fh2hTyqsasrWeVqcofah37AyscsQ&s",
    content: `
      <h2>Home & Office Networking Services</h2>
      <p>We provide comprehensive networking solutions for both home and office environments. Our expert team ensures secure, reliable, and efficient network setups tailored to your specific needs.</p>

      <h2>Network Setup Services</h2>
      <h3>Home Networking:</h3>
      <ul>
        <li>Wi-Fi Network Installation</li>
        <li>Router Configuration</li>
        <li>Network Security Setup</li>
        <li>Device Connection</li>
        <li>Network Extension</li>
        <li>Smart Home Integration</li>
      </ul>

      <h3>Office Networking:</h3>
      <ul>
        <li>LAN Setup and Configuration</li>
        <li>Wireless Network Installation</li>
        <li>Server Setup</li>
        <li>Network Security Implementation</li>
        <li>VPN Configuration</li>
        <li>Firewall Setup</li>
      </ul>

      <h2>Network Infrastructure</h2>
      <ul>
        <li>Structured Cabling</li>
        <li>Switch Installation</li>
        <li>Router Configuration</li>
        <li>Access Point Setup</li>
        <li>Network Storage Solutions</li>
        <li>Print Server Setup</li>
      </ul>

      <h2>Network Security</h2>
      <ul>
        <li>Firewall Configuration</li>
        <li>Security Protocols Implementation</li>
        <li>Access Control Setup</li>
        <li>Network Monitoring</li>
        <li>Threat Detection</li>
        <li>Regular Security Updates</li>
      </ul>

      <h2>Additional Services</h2>
      <ul>
        <li>Network Troubleshooting</li>
        <li>Performance Optimization</li>
        <li>Network Expansion</li>
        <li>Bandwidth Management</li>
        <li>Remote Access Setup</li>
        <li>Cloud Integration</li>
      </ul>

      <h2>Benefits of Professional Networking</h2>
      <ul>
        <li>Improved Connectivity</li>
        <li>Enhanced Security</li>
        <li>Better Performance</li>
        <li>Scalable Solutions</li>
        <li>Professional Support</li>
        <li>Cost-Effective Implementation</li>
      </ul>

      <h2>Our Process</h2>
      <ol>
        <li>Site Survey: Assess location and requirements</li>
        <li>Network Design: Plan optimal network layout</li>
        <li>Implementation: Install and configure network</li>
        <li>Testing: Verify network performance</li>
        <li>Documentation: Provide network documentation</li>
        <li>Training: User training and handover</li>
      </ol>

      <h2>Maintenance Services</h2>
      <ul>
        <li>Regular Network Checkups</li>
        <li>Performance Monitoring</li>
        <li>Security Updates</li>
        <li>Troubleshooting Support</li>
        <li>Network Optimization</li>
        <li>24/7 Technical Support</li>
      </ul>
    `
  }
]

export default function ServicePage() {
  const params = useParams()
  const service = services.find(service => service.id === params.service)

  if (!service) {
    return <div>Service not found</div>
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
                <Badge>{service.title}</Badge>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">{service.title}</CardTitle>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-lg mb-6" />
              <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: service.content }} />
              <div className="mt-8">
                <Button asChild>
                  <Link href="/services">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
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

