// import { Dashboard } from "@/components/dashboard"

// export default function DashboardPage() {
//   return <Dashboard />
// }

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginModal } from "@/components/login-modal"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white text-gray-800 shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">RoadConstruct Pro</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#features" className="hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:underline">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Login Button */}
      <section className="bg-blue-50 text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">Revolutionize Your Road Construction Projects</h2>
              <p className="text-xl mb-8">
                Streamline management, boost efficiency, and drive success with RoadConstruct Pro
              </p>
              <div className="space-x-4">
                <LoginModal />
                <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                  <Link href="/dashboard">View Demo</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/3">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Road Construction"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-blue-600">Project Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Project Management"
                  width={300}
                  height={200}
                  className="mb-4 rounded-lg"
                />
                <p className="text-gray-600">
                  Efficiently manage all aspects of your road construction projects in one place.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-blue-600">Resource Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Resource Allocation"
                  width={300}
                  height={200}
                  className="mb-4 rounded-lg"
                />
                <p className="text-gray-600">
                  Optimize resource allocation for maximum efficiency and cost-effectiveness.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-blue-600">Real-time Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Real-time Reporting"
                  width={300}
                  height={200}
                  className="mb-4 rounded-lg"
                />
                <p className="text-gray-600">
                  Generate comprehensive reports and gain insights with real-time data analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Highway Construction", "Urban Infrastructure", "Bridge Building", "Railway Construction"].map(
              (industry) => (
                <Card key={industry} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-blue-600">{industry}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/placeholder.svg?height=150&width=200"
                      alt={industry}
                      width={200}
                      height={150}
                      className="mb-4 rounded-lg"
                    />
                    <p className="text-gray-600">Tailored solutions for {industry.toLowerCase()} projects.</p>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About RoadConstruct Pro</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                RoadConstruct Pro is a leading provider of road construction management solutions. With years of
                industry experience, we understand the unique challenges faced by construction professionals.
              </p>
              <p className="text-lg mb-4">
                Our mission is to empower road construction teams with cutting-edge technology, enabling them to deliver
                projects on time and within budget.
              </p>
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="About RoadConstruct Pro"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-600">Company Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>2015 - Company founded</li>
                  <li>2017 - Launch of RoadConstruct Pro v1.0</li>
                  <li>2019 - Expanded to serve 100+ clients</li>
                  <li>2021 - Introduction of AI-powered features</li>
                  <li>2023 - Global expansion and partnership program</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-600">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-2">
                  <strong>Email:</strong> info@roadconstructpro.com
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="mb-2">
                  <strong>Address:</strong> 123 Construction Ave, Builder's City, State 12345
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Contact Us"
                  width={400}
                  height={200}
                  className="mt-4 rounded-lg"
                />
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-600">Request a Demo</CardTitle>
                <CardDescription className="text-gray-500">
                  See how RoadConstruct Pro can transform your projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    ></textarea>
                  </div>
                  <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">
                    Request Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">RoadConstruct Pro</h3>
              <p>Empowering road construction teams with innovative management solutions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#industries" className="hover:underline">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  Facebook
                </a>
                <a href="#" className="hover:text-blue-400">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-400">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 RoadConstruct Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

