interface ServiceInterface {
  name: string;
  description: string;
  image: string;
}
// Service data with names, descriptions, and images
export const services: Record<string, ServiceInterface> = {
  air_freight: {
    name:"Servicespg_services.airfrt.title", //"Air Freight",
    description:
      "Servicespg_services.airfrt.desc",//"Our air freight services provide swift, reliable, and secure transportation for urgent shipments worldwide. Leveraging a global network of airlines and logistics partners, we ensure your cargo reaches its destination quickly, with real-time tracking and customized solutions for perishable goods, high-value items, and oversized cargo. We handle all documentation, customs clearance, and compliance, offering 24/7 support to meet your tight deadlines. Whether for e-commerce, manufacturing, or retail, our air freight solutions optimize speed, reduce transit times, and enhance supply chain efficiency, ensuring your business stays ahead in a competitive market.",
    image:
      "https://res.cloudinary.com/djjwvuixb/image/upload/v1740398098/air_fright_evrmpy.webp",
  },
  ocean_freight: {
    name: "Servicespg_services.oceanfrt.title",//"Ocean Freight",
    description:
     "Servicespg_services.oceanfrt.desc", //"Our ocean freight services offer cost-effective, sustainable solutions for transporting large volumes of goods across continents. With access to major shipping routes and a fleet of container vessels, we ensure timely delivery for bulk cargo, raw materials, and finished products. We manage full-container loads (FCL), less-than-container loads (LCL), and specialized cargo, handling all customs, port logistics, and documentation. Our eco-friendly approach minimizes carbon footprints, while real-time tracking and expert support guarantee seamless operations. Ideal for importers, exporters, and manufacturers, our ocean freight services optimize cost, reliability, and global reach for your logistics needs.",
    image:
      "https://res.cloudinary.com/djjwvuixb/image/upload/v1740398098/ocean_freight_i9vk3s.webp",
  },
  road_rail_freight: {
    name:"Servicespg_services.roadfrt.title", //"Road and Rail Freight",
    description:
      "Servicespg_services.roadfrt.desc",//"Our road and rail freight services deliver flexible, efficient, and environmentally friendly transportation for domestic and regional shipments. Combining truck fleets with rail networks, we ensure fast, cost-effective delivery of goods, from small parcels to heavy machinery. Our solutions cover urban, rural, and cross-border routes, with real-time tracking, secure handling, and compliance with local regulations. Ideal for industries like manufacturing, retail, and construction, we optimize routes to reduce transit times and costs while minimizing emissions. With 24/7 support and advanced logistics expertise, we keep your supply chain moving smoothly and reliably.",
    image:
      "https://res.cloudinary.com/djjwvuixb/image/upload/v1740398098/road_rail_freight_thlc8f.webp",
  },
  customs_clearance: {
    name: "Servicespg_services.customsclr.title",//"Customs Clearance",
    description:
      "Servicespg_services.customsclr.desc",//"Our customs clearance services streamline international trade by ensuring seamless, compliant processing of your shipments. With expert knowledge of global tariffs, regulations, and documentation, we navigate complex customs procedures to minimize delays and penalties. We handle import/export declarations, duty calculations, and inspections, offering personalized solutions for businesses of all sizes. Our real-time tracking and proactive communication keep you informed at every step, reducing risk and ensuring compliance. Whether shipping by air, ocean, or land, our dedicated team accelerates your goods clearance, enhancing efficiency and supporting your logistics operations worldwide.",
    image:
      "https://res.cloudinary.com/djjwvuixb/image/upload/v1740398098/Customs_clearance__v1ivzb.webp",
  },
  warehouse: {
    name: "Servicespg_services.warehouse.title",//"Warehouse",
    description:
    "Servicespg_services.warehouse.desc",//"Our warehousing services provide secure, state-of-the-art storage solutions to optimize your supply chain. Equipped with advanced inventory management systems, climate control, and 24/7 security, we store a wide range of goods, from perishables to hazardous materials. We offer value-added services like pick-and-pack, kitting, and order fulfillment, ensuring efficient distribution. Our strategic locations near ports and transport hubs reduce transit times, while real-time tracking enhances visibility. Ideal for e-commerce, manufacturing, and retail, our flexible warehousing solutions scale with your business, improving inventory accuracy, cost efficiency, and customer satisfaction.",
    image:
      "https://res.cloudinary.com/djjwvuixb/image/upload/v1740398098/warehouse_aa6m8l.webp",
  },
  end_to_end_tracking: {
    name: "Servicespg_services.end.title",//"End-to-End Tracking",
    description:
     "Servicespg_services.end.desc",// "Our end-to-end tracking services provide complete visibility and control over your shipments from origin to destination. Using cutting-edge technology, we offer real-time updates, GPS tracking, and detailed analytics to monitor every stage of your logistics process. Whether by air, ocean, road, or rail, our system ensures transparency, minimizes risks, and improves decision-making. We integrate with your existing systems for seamless reporting and alerts, supported by our expert team. Perfect for businesses seeking reliability and accountability, our tracking solutions enhance efficiency, reduce delays, and ensure your cargo arrives on time, every time.",
    image:
      "https://img.freepik.com/free-photo/delivery-robot-futuristic-environment_23-2151189364.jpg?t=st=1740397490~exp=1740401090~hmac=b994f287da3918f16c04e9d7cfda61bdb4c4cb147d4f10975b95c1616dba3134&w=1060",
  },
};
