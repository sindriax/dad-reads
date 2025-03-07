import Image from "next/image";

const kindleAccessories = [
  {
    title: "Zoeley Teléfono Multiángulo Flexible Compatible",
    image: "/images/accessories/1.jpg",
    url: "https://www.amazon.es/Zoeley-Teléfono-Multiángulo-Flexible-Compatible/dp/B08JCMG4BY/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=14KW2F2J2HHAR&dib=eyJ2IjoiMSJ9.tZck43CSu5pKF15RH0O1Vf7L1L3cDRPARUZ8w1IPymLNBfumr-OTqdg7HJv96g-ulq65ILW9EQbNdb7sXrsPmyFwKraifn73EvsfEnkJ3KkSY0Vt4S7SXvC0_EHa0UZm-Vf4haTOKuSELcDU7cCuKpxiIhIxyd6N1SgRN-Awy9fBMXZ0iks1bmfPmQHFNAkGD89KXj7ayxTlQ0F_v1ouRvl8-5fouQVRUtppXcNl8oanR4yByet6Dy40cqzUK5esM5vP8sfC8VxxTOT1tjGif5-iUBZ43i5ItpMFa0vfOFtoSZiINaSQlzHiDeDCfZSe8v4N2LB9tcBr7HeoPddOPVe1PplBlcWkfTAGGKSClQ08_mNyc9i8t31-IKX97C1bTs5ts1q39AkMZEcZbIJ-vYu0b98enMil1ac9Cn2E6IIkwt1wL-LdEIiUo6u_R3X9.FYRn6Kocw_wE2nh-9yXfyvV8v9xBzEJEsVQU4Kba6DA&dib_tag=se&keywords=accesorios+kindle&qid=1741328288&sprefix=accesorios+kindle%2Caps%2C104&sr=8-2",
  },
  {
    title: "SYUKUYU Control Lectura Surface Tabletas",
    image: "/images/accessories/2.jpg",
    url: "https://www.amazon.es/SYUKUYU-Control-lectura-Surface-Tabletas/dp/B08T8CZYF3/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=14KW2F2J2HHAR&dib=eyJ2IjoiMSJ9.tZck43CSu5pKF15RH0O1Vf7L1L3cDRPARUZ8w1IPymLNBfumr-OTqdg7HJv96g-ulq65ILW9EQbNdb7sXrsPmyFwKraifn73EvsfEnkJ3KkSY0Vt4S7SXvC0_EHa0UZm-Vf4haTOKuSELcDU7cCuKpxiIhIxyd6N1SgRN-Awy9fBMXZ0iks1bmfPmQHFNAkGD89KXj7ayxTlQ0F_v1ouRvl8-5fouQVRUtppXcNl8oanR4yByet6Dy40cqzUK5esM5vP8sfC8VxxTOT1tjGif5-iUBZ43i5ItpMFa0vfOFtoSZiINaSQlzHiDeDCfZSe8v4N2LB9tcBr7HeoPddOPVe1PplBlcWkfTAGGKSClQ08_mNyc9i8t31-IKX97C1bTs5ts1q39AkMZEcZbIJ-vYu0b98enMil1ac9Cn2E6IIkwt1wL-LdEIiUo6u_R3X9.FYRn6Kocw_wE2nh-9yXfyvV8v9xBzEJEsVQU4Kba6DA&dib_tag=se&keywords=accesorios%2Bkindle&qid=1741328288&sprefix=accesorios%2Bkindle%2Caps%2C104&sr=8-1&th=1",
  },
  {
    title: "MoKo Correa Seguridad eReaders Tableta",
    image: "/images/accessories/3.jpg",
    url: "https://www.amazon.es/MoKo-Correa-Seguridad-eReaders-Tableta/dp/B0BJVMVGJ6/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=14KW2F2J2HHAR&dib=eyJ2IjoiMSJ9.tZck43CSu5pKF15RH0O1Vf7L1L3cDRPARUZ8w1IPymLNBfumr-OTqdg7HJv96g-ulq65ILW9EQbNdb7sXrsPmyFwKraifn73EvsfEnkJ3KkSY0Vt4S7SXvC0_EHa0UZm-Vf4haTOKuSELcDU7cCuKpxiIhIxyd6N1SgRN-Awy9fBMXZ0iks1bmfPmQHFNAkGD89KXj7ayxTlQ0F_v1ouRvl8-5fouQVRUtppXcNl8oanR4yByet6Dy40cqzUK5esM5vP8sfC8VxxTOT1tjGif5-iUBZ43i5ItpMFa0vfOFtoSZiINaSQlzHiDeDCfZSe8v4N2LB9tcBr7HeoPddOPVe1PplBlcWkfTAGGKSClQ08_mNyc9i8t31-IKX97C1bTs5ts1q39AkMZEcZbIJ-vYu0b98enMil1ac9Cn2E6IIkwt1wL-LdEIiUo6u_R3X9.FYRn6Kocw_wE2nh-9yXfyvV8v9xBzEJEsVQU4Kba6DA",
  },
  {
    title: "KDD Soporte Almohada Plegable Bolsillo",
    image: "/images/accessories/4.jpg",
    url: "https://www.amazon.es/KDD-Soporte-Almohada-Plegable-Bolsillo/dp/B0C6KH8YNR/ref=sxin_15_pa_sp_search_thematic_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.ce48ec8d-56a0-458e-98e0-59664798d338%3Aamzn1.sym.ce48ec8d-56a0-458e-98e0-59664798d338&crid=14KW2F2J2HHAR&cv_ct_cx=accesorios%2Bkindle&keywords=accesorios%2Bkindle&pd_rd_i=B0C6KH8YNR&pd_rd_r=33af6add-74bb-4543-9716-072a22b00c13&pd_rd_w=AbNw6&pd_rd_wg=ul10J&pf_rd_p=ce48ec8d-56a0-458e-98e0-59664798d338&pf_rd_r=N92QXB54TQE6VZVWZAAA&qid=1741328288&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=accesorios%2Bkindle%2Caps%2C104&sr=1-5-dddeab33-7095-47b2-8f68-ab1390142356-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1",
  },
];

export default function AccessoriesSection() {
  return (
    <section className="w-3/5 mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Latest Kindle Accessories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {kindleAccessories.map((accessory, index) => (
          <a
            key={index}
            href={accessory.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border rounded p-4 hover:shadow-lg transition"
          >
            <Image
              src={accessory.image}
              alt={accessory.title}
              width={300}
              height={200}
              className="w-full h-40 object-contain mb-2"
            />
            <h3 className="text-lg font-medium text-gray-700">
              {accessory.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
