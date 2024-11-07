import { Calendar, ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  organization: string;
  date: string;
  logo: string;
  credential?: string;
  category: 'Hackathon' | 'Course' | 'Achievement';
}

const certificates: Certificate[] = [
  {
    title: "Participation Certificate of Internal Hackathon - Smart India Hackathon 2024",
    organization: "Fr. Conceicao Rodrigues College of Engineering",
    date: "September 2024",
    logo: "data:image/jpeg;base64,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",
    credential:"https://drive.google.com/file/d/1DbHkmnJGn0yp1YDwvlVuk4isFFRibckN/view?usp=sharing",
    category: "Hackathon"
  },
  {
    title: "Certificate of participation in Bit N Build Hackathon",
    organization: "GDSC CRCE",
    date: "October 2024",
    logo: "data:image/png;base64,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",
    credential: "https://unstop.com/certificate-preview/77f4e667-84c7-4ab1-a4cc-1bd7a9625767",
    category: "Hackathon"
  },
  {
    title: "Certificate of participation in Hackwarts",
    organization: "Shree LR Tiwari College of Engineering",
    date: "September 2024",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-66fc480b84d41_hackward_lgog.jpg?d=200x200",
    credential: "https://unstop.com/certificate-preview/259ac0c9-6b72-432c-acaf-add0f69c5c93",
    category: "Hackathon"  
  },
  {
    title: "UI/UX Competition",
    organization: "GDSC CRCE",
    date: "october 2024",
    logo: "data:image/png;base64,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",
    credential: "https://unstop.com/certificate-preview/97fc69a4-51ca-4467-9d2d-e6bab94ef4f1",
    category: "Hackathon"
  },
  {
    title: "Prompt Engineering Zero to Hero (5 Days) course",
    organization: "Lets Upgrade",
    date: "october 2023",
    logo: "data:image/png;base64,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",
    credential: "https://verify.letsupgrade.in/certificate/LUEPESEP123858",
    category: "Course"
  }
];

const CertificateCard = ({ certificate }: { certificate: Certificate }) => (
  <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 p-2 flex items-center justify-center">
          <img 
            src={certificate.logo} 
            alt={certificate.organization}
            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {certificate.date}
        </span>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
          {certificate.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{certificate.organization}</p>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className={`
          px-3 py-1 rounded-full text-sm font-medium
          ${certificate.category === 'Hackathon' ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' : ''}
          ${certificate.category === 'Course' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : ''}
          ${certificate.category === 'Achievement' ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' : ''}
        `}>
          {certificate.category}
        </span>
      </div>

      {certificate.credential && (
        <a
          href={certificate.credential}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 p-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary/20 dark:hover:bg-primary/30"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  </div>
);

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Certificates & Achievements</h2>
          <p className="text-gray-600 dark:text-gray-400">Recognition of my technical expertise and accomplishments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}