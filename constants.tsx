
import { Service, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Ascensores Residenciales',
    description: 'Diseño y confort para edificios multifamiliares y residencias de lujo.',
    icon: 'home_work',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpnaJQqiWSH3gsQPvHAoU3Ik8oyb54s4TOYyYjlv_dnk3MwZgEJ69CtD34Rlm5hc3DYVEF4w2PorE47M-Zgw9I-B_3VfcACgwsyXekTAm-am2bU7OAEgNNmn5OVJL865uvadke6hsOwAQvBTYaYzJh4bwpL9191oAW7RdlklhTd4oiT3FfSqhkOYnLf0KiaiPLhti5n_ac8GEfwdIgCo-wHhvpJUaD889xEFrBi5dYnGHCh8Mu84DRdAch-2fKuGh9wMPk6CrlYA',
    category: 'Residencial',
    slug: 'residenciales'
  },
  {
    id: '2',
    title: 'Sistemas Comerciales',
    description: 'Alta capacidad y tráfico pesado para centros comerciales y oficinas.',
    icon: 'business',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARHE06vROHfwGMwdEJKc7VCZ4zfof7fddoHA1HwMLw2mLCkciw7sHwzShRV8YcUEY9xa5auG2TnRE7MESlEE3OHHKlc12Cm8sLc2DGSypnKefyKYqJmYYdKTBESWXqBEg5hzt5YpsV9TZZ0OX_uqjJl2UXx-ZAsIA2gMMhPEOdGjGdbrrl0wmwoKj82oNG688EGDlWb5peZ3GuDgAA3-EGf8BM2QL_hvW6rOEyEqvl6TTYDe8O9PQk5vM9sby73zgzQgGUIsPceA',
    category: 'Comercial',
    slug: 'comerciales'
  },
  {
    id: '7',
    title: 'Ascensores sin Cuarto de Máquinas (MRL)',
    description: 'Tecnología eficiente que optimiza el espacio arquitectónico.',
    icon: 'settings_overscan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjfDppBw3kkHTYqEt7CB2zMfHaGRA6zLsPEfqNdsJLG_524Kx6kJfOX-byLDt6i8Ig5IuPQD3zHM7GPzWVI_0D6LTX5FW_XG33NO9iYe2MMFB6YVjVaDqEHRv9qCLqtvkHFWLxo-lWPGWMC6CekDmWp_Ly_sVY5tEvCpfnRDhijN1zGRYECSwA_f2sN2NL5CJkGszDEt-omL1Rqv3qmJjuyslJxBhA9vrv_MYlCCSTElze5vSLlja7xSvVfec1zFE_LVAmAlygJA',
    category: 'Comercial',
    slug: 'sin-cuarto-maquina'
  },
  {
    id: '3',
    title: 'Montacargas Industriales',
    description: 'Soluciones robustas para el transporte de mercancías en entornos industriales.',
    icon: 'factory',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtBEFbxVB9Q8OdmiqijF6Vera3sylK9RPWekJnYNTlJd2BuSE0I-e0IKmR_afTA4BZuiG99qLrzpS4O6Ryb2a90B437Ee1oHV8_w5flvRlOm43OY4TLMLp3KTTweQb1WlaBT7AWUB1B-tHTGIUHFKmGiIgDnF-YjxMzDFt4T9BJUPQgWZNXBBrpHKbnAC6eatOSceCImtoAUjx-skxZ5U1xylvw5mQw6lo-suIXnvigFEhhWuo_jkwlnObkvd3NMvJ3E4-Db9xsw',
    category: 'Industrial',
    slug: 'montacargas'
  },
  {
    id: '8',
    title: 'Escaleras Eléctricas y Andenes',
    description: 'Movilidad continua para aeropuertos y grandes centros comerciales.',
    icon: 'stairs',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIS0jHnDwS0_jih0uNSC8p1uKdwctHc_hutcKXSgHvJwuOHseU4VCL0x02WhcanUcBhoMaktIRAYieO29apqPXe4rmpVHDtc2_KUiMYn-yHqystjemCqqkPjyMRZ7JIwRq8GVfkzjhaw_zUkEzg_mOIPwCgaQ6KAq1OkcQgOV4DUzPwZTJpIKDIN0mHCqm0NpIND0tN88FJ5trEekk2tlpJaTAEVrVGdgqRecKPjo0AIcbGce0m7baCPQ55M5AR3690r06XlyKkQ',
    category: 'Comercial',
    slug: 'escaleras-electricas'
  },
  {
    id: '4',
    title: 'Modernización Técnica',
    description: 'Actualización de sistemas antiguos para mejorar seguridad y eficiencia energética.',
    icon: 'update',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBanE20AryctAXpTkq_wRjmH2iGAINHrbvwNEkejB6sW9x-Qg8YwxgfruiQaj6YF7V-i1HsGLpaDOZdMPlzpmSYbf7YZjG55n_mglsXmT5qLmsMqlHVf2a-xMZBw38ftStoHvGG4LmPV307kE8Y8k9_bFrYtuC4hB26WIHz2qnkLkTGzmETlbahjtTYdG0Lh8dU1YP0Hh00_WoT5UFrqWq7moRWpMxkujy7Qsbl35OSv40siyrNHSQrLD2gNYNuKFakrkHnhdZEXg',
    category: 'Especial',
    slug: 'modernizacion'
  },
  {
    id: '5',
    title: 'Ascensores Camilleros',
    description: 'Equipos especializados para el sector salud con dimensiones precisas.',
    icon: 'medical_services',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTPwj5DjelICbqUM3tUYuW9ILGm4bDF1uf_v55qXnrTWKJySlRb2xGeCb31_7fLYTCJj0tkEbLcUQnBmsXK-MKapwkl_4Ky16es1Y8EFmaN0zDaF3CJB5j73Z4cB6gc7M4PqwXpvcHewR4pVwpATB1m5lIL5Kq-Ahr6fRuk561DwNTSaUg_l5V31e9QYtpJgLTY6YvzsOc9FqRdgfDqDKpQFUEQujhnZU5aD0u6TS2ZloEpmA_stok1fiPvtHHijUGKUbrh2cCVQ',
    category: 'Salud',
    slug: 'camilleros'
  },
  {
    id: '9',
    title: 'Plataformas de Accesibilidad',
    description: 'Soluciones para personas con movilidad reducida bajo normativa universal.',
    icon: 'accessible',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCfzZJFLqG_Zhl90ZbyglU8wbPsrsngFhbJqNCVhedd-_J8gjtvXpQCsvXkJfyIF-vsSKEOGiGgNAj-n0AGBkfOsIC5e0S-pb7uedG2OzqoNHJ_CMKySNQrDEs4gq29uwWGFQlPTqQzrRTxQ3GOrcc66w3L81VqXLgHBJAVz6hjijKwler2FBSXsOE4rQ4wnVlPBDpvXXrpUfEmGRSUYhs5b2q3hcwObe6IlSBZtT8wBOtgCqfp0vH4pG_r1zjX1p4aXPt9g3f-w',
    category: 'Especial',
    slug: 'accesibilidad'
  },
  {
    id: '6',
    title: 'Ascensores Panorámicos',
    description: 'Diseño y vista estética inigualable para hoteles y centros de lujo.',
    icon: 'visibility',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe_KyR9Ah-_hNckkDBj4rrmMK4R050th7sOJOIbghjQqyMdwJJP-uHK0YsCp-3t55WQsnTpyK47zW3iVTmGRcMhS0I-jF3EaWtYE424H-bnLNuU0R3xH4Z1U95OlOuBGwb_v_BrtIKw3dnzKy-oX6cFduQsA5JoI3vK9ug0VSwJNhUBHeUmpteiI-ezETjlgTUpZZ3SyUjttjra7V-HL76ObsuDp3n8WKfVB3EKLPeQkvdSCdL29CJV_1C68gy1bHyePLTRi4zMQ',
    category: 'Especial',
    slug: 'panoramicos'
  },
  {
    id: '10',
    title: 'Sistemas de Estacionamiento Vertical',
    description: 'Duplicadores de parqueo y sistemas automatizados de alta tecnología.',
    icon: 'directions_car',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu3rFC4AXv9gArRrIKFmZOYah9mh2cSS0Oh1bnhG7ot4kKdJ8-eLDAfcvTyn-VNHURTmawfCQr7FUDsr-_KyzdiQI52oOiNsTzVYuOoGq2T0ftorrGaCfxIQpd0yiiOyBBBCbZIzC_X_mew8qcMCjAqw5UfiGcFxG_753epb9O22IEQidvcN0ZGrHQpTYu3J2lNeV_GJ3sPwFOVXxM6bDAthQYUQWsm4mXzO2ClNd0kHuuqmghUu6Y2zqukXrHgLgFel5P_tmP2A',
    category: 'Especial',
    slug: 'parking'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Nuevas Normas de Seguridad en Edificios de Cartagena',
    date: '15 Oct, 2023',
    excerpt: 'Descubra los cambios regulatorios recientes que afectan la certificación de ascensores en el casco histórico...',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCfzZJFLqG_Zhl90ZbyglU8wbPsrsngFhbJqNCVhedd-_J8gjtvXpQCsvXkJfyIF-vsSKEOGiGgNAj-n0AGBkfOsIC5e0S-pb7uedG2OzqoNHJ_CMKySNQrDEs4gq29uwWGFQlPTqQzrRTxQ3GOrcc66w3L81VqXLgHBJAVz6hjijKwler2FBSXsOE4rQ4wnVlPBDpvXXrpUfEmGRSUYhs5b2q3hcwObe6IlSBZtT8wBOtgCqfp0vH4pG_r1zjX1p4aXPt9g3f-w',
    category: 'Normativa',
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'Guía de Mantenimiento Preventivo 2024',
    date: '02 Oct, 2023',
    excerpt: 'Un checklist completo para administradores de edificios que buscan prolongar la vida útil de sus equipos...',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu3rFC4AXv9gArRrIKFmZOYah9mh2cSS0Oh1bnhG7ot4kKdJ8-eLDAfcvTyn-VNHURTmawfCQr7FUDsr-_KyzdiQI52oOiNsTzVYuOoGq2T0ftorrGaCfxIQpd0yiiOyBBBCbZIzC_X_mew8qcMCjAqw5UfiGcFxG_753epb9O22IEQidvcN0ZGrHQpTYu3J2lNeV_GJ3sPwFOVXxM6bDAthQYUQWsm4mXzO2ClNd0kHuuqmghUu6Y2zqukXrHgLgFel5P_tmP2A',
    category: 'Mantenimiento',
    readTime: '8 min'
  }
];
