
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="bg-[#1187e6] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* CONTACT DETAILS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Details</h3>

          <div className="flex items-start gap-3 mb-3 text-sm">
            <MapPin className="w-5 h-5 mt-1 text-white/80" />
            <p className="leading-relaxed text-white/90">
              9A, 5, Club Rd, M.S. Nagar, Mukta Gardens,  
              Chetpet, Chennai, Tamil Nadu – 600031
            </p>
          </div>

          <div className="flex items-center gap-3 mb-3 text-sm">
            <Mail className="w-5 h-5 text-white/80" />
            <a
              href="mailto:customercare@tccl.co.in"
              className="hover:underline"
            >
              customercare@tccl.co.in
            </a>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-5 h-5 text-white/80" />
            <span>044-4060-6666 | 1800-102-9845</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
                        <li>
              <Link to="/terms" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA / SUPPORT */}
        <div className="flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
          <p className="text-sm text-white/90 mb-4">
            Our support team is available to assist you with any service or billing
            related queries.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-[#1187e6] font-semibold px-5 py-2 rounded-lg w-fit hover:bg-gray-100 transition"
          >
            Get Support
          </Link>
        </div>

      </div>

    </section>
  );
};

export default ContactSection;
