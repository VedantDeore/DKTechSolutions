"use client"

import { useParams } from 'next/navigation'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Computer Maintenance",
    content: `
      <p>Regular computer maintenance is crucial for keeping your device running smoothly and efficiently. Here are 10 essential tips to help you maintain your computer:</p>

      <h2>1. Keep Your Software Updated</h2>
      <p>Regularly update your operating system, antivirus software, and other applications. These updates often include important security patches and performance improvements.</p>

      <h2>2. Clean Up Your Hard Drive</h2>
      <p>Remove unnecessary files and programs to free up space on your hard drive. Use built-in tools like Disk Cleanup on Windows or manage storage on macOS.</p>

      <h2>3. Organize Your Files</h2>
      <p>Keep your files organized in a logical folder structure. This makes it easier to find what you need and can improve system performance.</p>

      <h2>4. Run Regular Virus Scans</h2>
      <p>Use reputable antivirus software and run regular scans to protect your computer from malware and other security threats.</p>

      <h2>5. Back Up Your Data</h2>
      <p>Regularly back up your important files to an external hard drive or cloud storage service to protect against data loss.</p>

      <h2>6. Clean Your Hardware</h2>
      <p>Physically clean your computer, including the keyboard, mouse, and monitor. For desktops, carefully clean inside the case to remove dust buildup.</p>

      <h2>7. Manage Startup Programs</h2>
      <p>Limit the number of programs that automatically start when your computer boots up to improve startup times and overall performance.</p>

      <h2>8. Defragment Your Hard Drive</h2>
      <p>If you're using a traditional HDD, defragment it regularly to optimize file storage and improve access times. (Note: This isn't necessary for SSDs.)</p>

      <h2>9. Monitor Your Computer's Temperature</h2>
      <p>Ensure proper ventilation and monitor your computer's temperature to prevent overheating, which can cause performance issues and hardware damage.</p>

      <h2>10. Upgrade Hardware When Necessary</h2>
      <p>Consider upgrading components like RAM or switching to an SSD if your computer is running slowly. Sometimes, hardware upgrades can significantly boost performance.</p>

      <p>By following these tips, you can keep your computer running efficiently and extend its lifespan. Regular maintenance not only improves performance but also helps prevent costly repairs or data loss in the future.</p>
    `,
    category: "Maintenance",
    author: "John Doe",
    date: "2023-05-15",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/p/AF1QipNPfuVqUUkoZILqAapTwLlCPKd22RvZ0FhV9izI=s1360-w1360-h1020",
    featured: true
  },
  {
    id: 2,
    title: "Understanding SSD vs HDD: Which is Right for You?",
    content: `
      <p>When it comes to computer storage, two main options dominate the market: Solid State Drives (SSDs) and Hard Disk Drives (HDDs). Each has its own set of advantages and disadvantages, and choosing between them depends on your specific needs and budget. Let's dive into the details of both to help you make an informed decision.</p>

      <h2>Hard Disk Drives (HDDs)</h2>
      <p>HDDs have been the standard for computer storage for decades. They use magnetic disks to store data.</p>

      <h3>Pros of HDDs:</h3>
      <ul>
        <li>More affordable per gigabyte of storage</li>
        <li>Available in very large capacities (up to 20TB for consumer drives)</li>
        <li>Good for storing large files like videos and backups</li>
      </ul>

      <h3>Cons of HDDs:</h3>
      <ul>
        <li>Slower read and write speeds compared to SSDs</li>
        <li>More susceptible to physical damage due to moving parts</li>
        <li>Higher power consumption and heat generation</li>
        <li>Can be noisy during operation</li>
      </ul>

      <h2>Solid State Drives (SSDs)</h2>
      <p>SSDs are newer technology that uses flash memory to store data, similar to USB drives.</p>

      <h3>Pros of SSDs:</h3>
      <ul>
        <li>Much faster read and write speeds, leading to quicker boot times and application launches</li>
        <li>More durable as they have no moving parts</li>
        <li>Silent operation</li>
        <li>Lower power consumption, which can lead to better battery life in laptops</li>
      </ul>

      <h3>Cons of SSDs:</h3>
      <ul>
        <li>More expensive per gigabyte compared to HDDs</li>
        <li>Generally available in smaller capacities than HDDs</li>
        <li>Limited write cycles (though this is typically not an issue for average users)</li>
      </ul>

      <h2>Which One Should You Choose?</h2>
      <p>The choice between SSD and HDD often comes down to balancing performance, capacity, and cost:</p>

      <ul>
        <li><strong>For speed and responsiveness:</strong> Choose an SSD, especially for your operating system and frequently used applications.</li>
        <li><strong>For large storage needs on a budget:</strong> An HDD might be more suitable, particularly for storing large media files, backups, or extensive data archives.</li>
        <li><strong>For the best of both worlds:</strong> Many users opt for a dual-drive setup, using a smaller SSD for the operating system and key applications, and a larger HDD for file storage.</li>
      </ul>

      <p>Ultimately, the right choice depends on your specific needs, budget, and the way you use your computer. SSDs are becoming increasingly affordable and are generally the better choice for most users due to their significant performance benefits. However, if you need a lot of storage space and are on a tight budget, HDDs still offer great value.</p>
    `,
    category: "Hardware",
    author: "Jane Smith",
    date: "2023-05-10",
    readTime: "7 min read",
    image: "https://lh3.googleusercontent.com/p/AF1QipNicFOTFiDCFznAsnXd6h3xrtjwQ5tLMFULz8yf=s1360-w1360-h1020"
  },
  {
    id: 3,
    title: "The Ultimate Guide to Removing Malware",
    content: `
      <p>Malware can be a serious threat to your computer's security and your personal data. This guide will walk you through the steps to effectively remove malware from your system.</p>

      <h2>1. Recognize the Signs of Malware</h2>
      <p>Before you begin removal, it's important to recognize the signs of malware infection:</p>
      <ul>
        <li>Slow computer performance</li>
        <li>Unexpected pop-ups or ads</li>
        <li>Changes to your homepage or browser settings</li>
        <li>Unfamiliar programs running in the background</li>
        <li>Unusual network activity</li>
      </ul>

      <h2>2. Disconnect from the Internet</h2>
      <p>To prevent further damage or data theft, disconnect your computer from the internet before starting the removal process.</p>

      <h2>3. Boot into Safe Mode</h2>
      <p>Restart your computer in Safe Mode to prevent malware from loading with your operating system.</p>

      <h2>4. Clear Your Browser Cache and Temporary Files</h2>
      <p>Remove temporary files that might be harboring malware:</p>
      <ul>
        <li>In Windows, use Disk Cleanup</li>
        <li>On Mac, use OnyX or a similar cleanup utility</li>
      </ul>

      <h2>5. Update Your Antivirus Software</h2>
      <p>If you have antivirus software installed, update it to the latest version to ensure it can detect the most recent threats.</p>

      <h2>6. Run a Full System Scan</h2>
      <p>Use your antivirus software to run a full system scan. This may take several hours, but it's crucial for detecting and removing malware.</p>

      <h2>7. Use Malware-Specific Removal Tools</h2>
      <p>If your antivirus doesn't detect or remove the malware, try specialized tools like:</p>
      <ul>
        <li>Malwarebytes</li>
        <li>Spybot Search & Destroy</li>
        <li>HitmanPro</li>
      </ul>

      <h2>8. Check Your Browser Extensions</h2>
      <p>Remove any suspicious or unfamiliar browser extensions that might be causing issues.</p>

      <h2>9. Change Your Passwords</h2>
      <p>After removing the malware, change passwords for all your important accounts, especially if you suspect your information may have been compromised.</p>

      <h2>10. Keep Your System Updated</h2>
      <p>Regularly update your operating system and all software to patch security vulnerabilities and protect against future infections.</p>

      <h2>Prevention is Key</h2>
      <p>To avoid future malware infections:</p>
      <ul>
        <li>Keep your software and operating system up to date</li>
        <li>Use strong, unique passwords for all accounts</li>
        <li>Be cautious when opening email attachments or clicking on links</li>
        <li>Only download software from trusted sources</li>
        <li>Use a reputable antivirus program and keep it updated</li>
      </ul>

      <p>By following these steps, you can effectively remove malware from your system and protect yourself against future infections. If you're unsure about any step or if the problem persists, don't hesitate to seek help from a professional IT support service.</p>
    `,
    category: "Security",
    author: "Mike Johnson",
    date: "2023-05-05",
    readTime: "10 min read",
    image: "https://raw.githubusercontent.com/VedantDeore/DKTechSolutions/refs/heads/main/d12d9f11-fa99-46d8-b1b5-f71ae4ed51d7%20(1).webp"
  },
  {
    id: 4,
    title: "Maximizing Your Computer's Performance for Gaming",
    content: `
      <p>For gamers, having a well-optimized computer can make all the difference in their gaming experience. Here's a comprehensive guide to maximizing your computer's performance for gaming:</p>

      <h2>1. Upgrade Your Hardware</h2>
      <p>The most effective way to boost gaming performance is often through hardware upgrades:</p>
      <ul>
        <li><strong>Graphics Card (GPU):</strong> This is typically the most important component for gaming. A powerful GPU can significantly improve frame rates and allow for higher graphics settings.</li>
        <li><strong>Processor (CPU):</strong> A fast CPU is crucial, especially for CPU-intensive games.</li>
        <li><strong>RAM:</strong> Ensure you have at least 16GB of RAM for modern gaming. More RAM can help with multitasking and running memory-intensive games.</li>
        <li><strong>Storage:</strong> An SSD can dramatically reduce load times. Consider having your OS and favorite games on an SSD.</li>
      </ul>

      <h2>2. Update Your Drivers</h2>
      <p>Keep your graphics card drivers up to date. Manufacturers often release updates that can improve performance for new games.</p>

      <h2>3. Optimize In-Game Settings</h2>
      <p>Adjust in-game graphics settings for the best balance between visual quality and performance:</p>
      <ul>
        <li>Lower resolution for better frame rates</li>
        <li>Reduce effects like shadows, anti-aliasing, and post-processing</li>
        <li>Use lower texture qualities if necessary</li>
      </ul>

      <h2>4. Disable Background Processes</h2>
      <p>Close unnecessary programs and background processes to free up system resources for your game.</p>

      <h2>5. Use Game Mode in Windows 10/11</h2>
      <p>Windows Game Mode can help prioritize system resources for games.</p>

      <h2>6. Optimize Your Network</h2>
      <p>For online gaming:</p>
      <ul>
        <li>Use a wired connection instead of Wi-Fi when possible</li>
        <li>Close bandwidth-heavy applications</li>
        <li>Consider a gaming-focused router for better traffic management</li>
      </ul>

      <h2>7. Keep Your System Clean</h2>
      <p>Regularly clean your computer, both software (removing unnecessary files and programs) and hardware (dust removal) to maintain optimal performance.</p>

      <h2>8. Overclock (with caution)</h2>
      <p>If you're comfortable, consider overclocking your GPU and CPU for extra performance. Be aware of the risks and ensure proper cooling.</p>

      <h2>9. Use Performance-Boosting Software</h2>
      <p>Some utilities can help optimize your system for gaming:</p>
      <ul>
        <li>MSI Afterburner for GPU overclocking and monitoring</li>
        <li>Razer Cortex for game boosting and system cleaning</li>
      </ul>

      <h2>10. Invest in Cooling</h2>
      <p>Proper cooling can prevent thermal throttling and allow your components to perform at their best. Consider:</p>
      <ul>
        <li>Additional case fans</li>
        <li>Upgraded CPU cooler</li>
        <li>Good cable management for better airflow</li>
      </ul>

      <h2>11. Use SSDs for Game Storage</h2>
      <p>Installing games on an SSD can significantly reduce load times and improve in-game performance, especially for open-world games.</p>

      <h2>12. Adjust Windows for Best Performance</h2>
      <p>In Windows, you can adjust visual effects for best performance. This can free up resources for gaming.</p>

      <p>Remember, the effectiveness of these tips can vary depending on your specific hardware and the games you play. It's often a process of trial and error to find the best settings for your setup. Regular maintenance and staying up-to-date with both hardware and software can ensure you're always getting the best gaming performance from your computer.</p>
    `,
    category: "Performance",
    author: "Sarah Lee",
    date: "2023-04-30",
    readTime: "8 min read",
    image: "https://lh3.googleusercontent.com/p/AF1QipO7cq_9ey4xZuriVzyLb-Xab7_LmQIzm-9tajlI=s1360-w1360-h1020"
  },
  {
    id: 5,
    title: "The Future of Computing: Emerging Technologies",
    content: `
      <p>The world of computing is constantly evolving, with new technologies emerging that have the potential to revolutionize how we interact with digital systems. Let's explore some of the most exciting emerging technologies that are shaping the future of computing:</p>

      <h2>1. Quantum Computing</h2>
      <p>Quantum computers leverage the principles of quantum mechanics to perform complex calculations at unprecedented speeds. This technology has the potential to revolutionize fields such as cryptography, drug discovery, and financial modeling.</p>

      <h2>2. Artificial Intelligence and Machine Learning</h2>
      <p>AI and ML are already transforming various industries. Future developments in these fields will lead to more sophisticated natural language processing, computer vision, and decision-making systems.</p>

      <h2>3. Edge Computing</h2>
      <p>Edge computing brings data storage and computation closer to the devices where it's being gathered, rather than relying on a central location that can be thousands of miles away. This is crucial for real-time applications like autonomous vehicles and IoT devices.</p>

      <h2>4. 5G and Beyond</h2>
      <p>The rollout of 5G networks is just the beginning. Future generations of wireless technology will enable even faster data transfer rates, lower latency, and the ability to connect a vast number of devices simultaneously.</p>

      <h2>5. Augmented and Virtual Reality</h2>
      <p>AR and VR technologies are becoming more sophisticated, with applications ranging from gaming and entertainment to education and professional training.</p>

      <h2>6. Blockchain and Distributed Ledger Technologies</h2>
      <p>Beyond cryptocurrencies, blockchain technology has the potential to revolutionize areas such as supply chain management, voting systems, and digital identity verification.</p>

      <h2>7. Neuromorphic Computing</h2>
      <p>This technology aims to create computer chips that mimic the human brain's neural structure, potentially leading to more efficient AI systems and new approaches to problem-solving.</p>

      <h2>8. Biometric Computing</h2>
      <p>Advanced biometric systems will go beyond fingerprint and facial recognition, potentially including technologies like gait analysis and even brain-computer interfaces.</p>

      <h2>9. Sustainable and Green Computing</h2>
      <p>As environmental concerns grow, there's an increasing focus on developing energy-efficient hardware and software, as well as exploring alternative materials for electronic components.</p>

      <h2>10. Advanced Robotics</h2>
      <p>The integration of AI, improved sensors, and more sophisticated mechanical designs is leading to robots that can perform increasingly complex tasks in various environments.</p>

      <p>These emerging technologies are not developing in isolation; many are interconnected and will likely combine to create even more powerful computing paradigms. For instance, the combination of 5G, edge computing, and IoT could lead to smart cities with highly responsive infrastructure.</p>

      <p>As these technologies mature, they will undoubtedly bring both exciting opportunities and new challenges. Privacy concerns, ethical considerations in AI development, and the need for new regulatory frameworks are just a few of the issues that will need to be addressed.</p>

      <p>The future of computing is bright and full of potential. Staying informed about these emerging technologies can help individuals and businesses prepare for and take advantage of the digital landscape of tomorrow.</p>
    `,
    category: "Technology",
    author: "Alex Chen",
    date: "2023-04-25",
    readTime: "6 min read",
    image: "https://lh3.googleusercontent.com/p/AF1QipNB1JabAqYKGHsJQODFlMhNq_QeQ6WmzLzuuwl_=s1360-w1360-h1020"
  },
  {
    id: 6,
    title: "Troubleshooting Common Windows Errors",
    content: `
      <p>Windows errors can be frustrating, but many common issues have straightforward solutions. Here's a guide to troubleshooting some of the most frequent Windows errors:</p>

      <h2>1. Blue Screen of Death (BSOD)</h2>
      <p>The infamous BSOD often indicates a serious system error.</p>
      <ul>
        <li>Note down the error code for research</li>
        <li>Check for recent hardware or software changes</li>
        <li>Update drivers, especially graphics and chipset drivers</li>
        <li>Run a memory diagnostic tool</li>
        <li>Perform a clean boot to identify conflicting software</li>
      </ul>

      <h2>2. Windows Update Errors</h2>
      <p>When Windows updates fail to install:</p>
      <ul>
        <li>Run the Windows Update Troubleshooter</li>
        <li>Clear the Windows Update cache</li>
        <li>Ensure you have enough disk space</li>
        <li>Try updating in Safe Mode</li>
      </ul>

      <h2>3. "Windows is not genuine" Error</h2>
      <p>If Windows is flagging as not genuine:</p>
      <ul>
        <li>Ensure your copy of Windows is properly activated</li>
        <li>Run the activation troubleshooter</li>
        <li>Contact Microsoft support if you believe it's an error</li>
      </ul>

      <h2>4. Driver_IRQL_Not_Less_Or_Equal</h2>
      <p>This error is often related to driver issues:</p>
      <ul>
        <li>Update all drivers, especially recently installed ones</li>
        <li>Uninstall recently added hardware or drivers</li>
        <li>Run a memory diagnostic tool</li>
      </ul>

      <h2>5. DLL Errors</h2>
      <p>When you encounter "X.dll is missing" errors:</p>
      <ul>
        <li>Reinstall the program that's showing the error</li>
        <li>Restore the DLL file from a backup</li>
        <li>Run a System File Checker (SFC) scan</li>
      </ul>

      <h2>6. Slow Boot Times</h2>
      <p>If Windows is taking too long to start:</p>
      <ul>
        <li>Disable unnecessary startup programs</li>
        <li>Run a disk cleanup and defragmentation</li>
        <li>Check for malware</li>
        <li>Consider upgrading to an SSD if you're using an HDD</li>
      </ul>

      <h2>7. "No Boot Device Found" Error</h2>
      <p>When your PC can't find the boot drive:</p>
      <ul>
        <li>Check BIOS/UEFI settings to ensure the correct boot drive is selected</li>
        <li>Verify all cables are properly connected</li>
        <li>Run hardware diagnostics on your boot drive</li>
      </ul>

      <h2>8. File Explorer Crashes</h2>
      <p>If File Explorer frequently crashes or freezes:</p>
      <ul>
        <li>Clear File Explorer history</li>
        <li>Run the System File Checker</li>
        <li>Check for and install Windows updates</li>
      </ul>

      <h2>9. Memory Management Error</h2>
      <p>This error can indicate issues with your RAM:</p>
      <ul>
        <li>Run Windows Memory Diagnostic tool</li>
        <li>Check for driver conflicts</li>
        <li>Ensure your RAM is properly seated in its slots</li>
      </ul>

      <h2>10. "Windows License Will Expire Soon" Error</h2>
      <p>If you see this warning:</p>
      <ul>
        <li>Check your subscription status if using Windows 365</li>
        <li>Ensure your system clock is accurate</li>
        <li>Run the activation troubleshooter</li>
      </ul>

      <p>Remember, before making any significant changes to your system, always back up your important data. If you're uncomfortable performing these troubleshooting steps yourself, or if the problems persist, don't hesitate to seek help from a professional IT support service.</p>

      <p>Keeping your system updated, running regular maintenance, and being cautious about the software you install can help prevent many of these common Windows errors. Regular backups are also crucial to ensure you can recover your data in case of serious system issues.</p>
    `,
    category: "Troubleshooting",
    author: "Emily Brown",
    date: "2023-04-20",
    readTime: "9 min read",
    image: "https://raw.githubusercontent.com/VedantDeore/DKTechSolutions/refs/heads/main/a822c777-bbe1-4383-a792-33de82fdd6da.webp"
  }
]

export default function BlogPost() {
  const params = useParams()
  const post = blogPosts.find(post => post.id.toString() === params.id)

  if (!post) {
    return <div>Post not found</div>
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
                <Badge>{post.category}</Badge>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">{post.title}</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <User className="mr-2 h-4 w-4" />
                <span className="mr-4">{post.author}</span>
                <Calendar className="mr-2 h-4 w-4" />
                <span className="mr-4">{post.date}</span>
                <Clock className="mr-2 h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
              <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

