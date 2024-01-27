// remix icons
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinFill,
} from 'react-icons/ri';

// services icons
import Service1Icon from './assets/img/services/uiux_design.svg';
import Service2Icon from './assets/img/services/web_design.svg';
import Service3Icon from './assets/img/services/development.svg';

// brands images
import Brand1Image from './assets/img/brands/html.svg';
import Brand2Image from './assets/img/brands/javascript.svg';
import Brand3Image from './assets/img/brands/reactjs.svg';
import Brand4Image from './assets/img/brands/tailwind.svg';
import Brand5Image from './assets/img/brands/google.svg';

// portfolio images
import PortfolioImage1 from './assets/img/portfolio/p1.jpg';
import PortfolioImage2 from './assets/img/portfolio/p2.jpg';
import PortfolioImage3 from './assets/img/portfolio/p3.jpg';
import PortfolioImage4 from './assets/img/portfolio/p4.jpg';
import PortfolioImage5 from './assets/img/portfolio/p5.jpg';

// nav
export const nav = [
  {
    name: 'home',
  },
  {
    name: 'about',
  },
  {
    name: 'skills',
  },
  {
    name: 'contributors',
  },

  {
    name: 'contact',
  },
];

// social
export const social = [
  {
    icon: <RiYoutubeFill />,
    href: '',
  },
  {
    icon: <RiInstagramFill />,
    href: '',
  },
  {
    icon: <RiGithubFill />,
    href: '',
  },
  {
    icon: <RiLinkedinFill />,
    href: '',
  },
];

// about
export const about = {
  title: 'Về Bản Thân Tôi',
  subtitle:
    "Tôi là một lập trình viên với niềm đam mê sâu sắc về việc tạo ra các ứng dụng và giải pháp công nghệ sáng tạo. Với nền tảng chính là ngôn ngữ lập trình javascript và kinh nghiệm rộng rãi trong việc làm việc với tailwindcss và boostrapcss, tôi đã tham gia vào nhiều dự án phức tạp, từ ứng dụng web đến các dịch vụ phần mềm.",
  image: '',
};

// services
export const services = {
  title: 'Kỹ Năng',
  subtitle:
    'Tất cả các thành viên trong đội của chúng tôi đều là những chuyên gia hàng đầu trong lĩnh vực lập trình, đảm bảo chúng tôi có đội ngũ đa dạng với kỹ năng chuyên sâu trong các lĩnh vực như phát triển phần mềm, quản lý dự án, thiết kế giao diện người dùng, và triển khai hệ thống.',
  skills: [
    {
      icon: Service1Icon,
      name: 'Ngôn ngữ lập trình:',
      description:
        "Lập trình viên cần có kiến thức vững về ít nhất một ngôn ngữ lập trình. Điều này bao gồm khả năng viết mã, hiểu rõ cú pháp, và có khả năng xử lý lỗi.",
    },
    {
      icon: Service2Icon,
      name: 'Kiến thức về cấu trúc dữ liệu và thuật toán:',
      description:
        "Lập trình viên cần hiểu về cách tổ chức và quản lý dữ liệu cũng như thuật toán để giải quyết các vấn đề hiệu quả. Điều này là quan trọng để tối ưu hóa hiệu suất của chương trình.",
    },
    {
      icon: Service3Icon,
      name: 'Khả năng giải quyết vấn đề:',
      description:
        "Lập trình viên cần có khả năng phân tích vấn đề, đưa ra giải pháp và triển khai mã nguồn một cách có hiệu quả. Sự sáng tạo và khả năng làm việc nhóm cũng là những kỹ năng quan trọng trong quá trình giải quyết vấn đề lập trình.",
    },
  ],
};

// contributors
export const contributors = {
  title: 'Người đóng góp',
  subtitle:
    'Họ hỗ trợ các sản phẩm giúp đơn giản hóa và tự động hóa các quy trình cơ khí phù hợp, tiết kiệm thời gian cho các hoạt động.',
  brands: [
    {
      image: Brand1Image,
    },
    {
      image: Brand2Image,
    },
    {
      image: Brand3Image,
    },
    {
      image: Brand4Image,
    },
    {
      image: Brand5Image,
    },
  ],
};

// portfolio
export const portfolio = {
  preTitle: 'Our Regular Updated',
  title: 'Portfolio.',
  image1: PortfolioImage1,
  image2: PortfolioImage2,
  image3: PortfolioImage3,
  image4: PortfolioImage4,
  image5: PortfolioImage5,
};

// contact
export const contact = {
  title: 'Contact.',
  subtitle:
    'Truth is a deep kindness that teaches us to be content in our everyday life and share with the people the same happiness. the feeling of sunday is the same everywhere: heavy, melancholy, standing still..',
};
