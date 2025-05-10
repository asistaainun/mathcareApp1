export const MOCK_DATA = {
  user: {
    name: "Guest User",
    skinType: "combination",
    skinConcerns: ["acne", "hyperpigmentation", "dryness"],
    sensitivities: ["fragrance", "alcohol"],
    routines: {
      morning: [
        { id: "p1", category: "cleanser", name: "Gentle Foaming Cleanser" },
        { id: "p4", category: "toner", name: "Hydrating Toner" },
        { id: "p7", category: "serum", name: "Niacinamide 10%" },
        { id: "p10", category: "moisturizer", name: "Oil-Free Moisturizer" },
        { id: "p13", category: "sunscreen", name: "SPF 50 Sunscreen" }
      ],
      evening: [
        { id: "p1", category: "cleanser", name: "Gentle Foaming Cleanser" },
        { id: "p5", category: "exfoliator", name: "BHA Liquid Exfoliant" },
        { id: "p8", category: "serum", name: "Retinol Serum" },
        { id: "p11", category: "moisturizer", name: "Night Recovery Cream" }
      ]
    }
  },
  products: [
    {
      id: "p1",
      name: "Gentle Foaming Cleanser",
      brand: "CeraVe",
      price: 12.99,
      category: "cleanser",
      formulation: "foam",
      rating: 4.5,
      reviewCount: 1245,
      image: "/api/placeholder/200/200",
      matchScore: 95,
      ingredients: ["Aqua/Water", "Glycerin", "Sodium Cocoyl Glycinate", "Ceramides", "Niacinamide"],
      keyIngredients: ["Ceramides", "Niacinamide"],
      concerns: ["acne", "sensitivity", "dryness"],
      suitableFor: ["oily", "combination", "sensitive"]
    },
    {
      id: "p2",
      name: "Hydrating Facial Cleanser",
      brand: "CeraVe",
      price: 14.99,
      category: "cleanser",
      formulation: "lotion",
      rating: 4.7,
      reviewCount: 2891,
      image: "/api/placeholder/200/200",
      matchScore: 87,
      ingredients: ["Aqua/Water", "Glycerin", "Cetearyl Alcohol", "Ceramides", "Hyaluronic Acid"],
      keyIngredients: ["Ceramides", "Hyaluronic Acid"],
      concerns: ["dryness", "sensitivity"],
      suitableFor: ["dry", "sensitive", "normal"]
    },
    {
      id: "p3",
      name: "Salicylic Acid Cleanser",
      brand: "The Ordinary",
      price: 7.99,
      category: "cleanser",
      formulation: "gel",
      rating: 4.2,
      reviewCount: 945,
      image: "/api/placeholder/200/200",
      matchScore: 82,
      ingredients: ["Aqua/Water", "Salicylic Acid", "Glycerin", "Cocamidopropyl Betaine"],
      keyIngredients: ["Salicylic Acid 2%"],
      concerns: ["acne", "oiliness", "large pores"],
      suitableFor: ["oily", "combination", "acne-prone"]
    },
    {
      id: "p4",
      name: "Hydrating Toner",
      brand: "Paula's Choice",
      price: 24.00,
      category: "toner",
      formulation: "liquid",
      rating: 4.6,
      reviewCount: 756,
      image: "/api/placeholder/200/200",
      matchScore: 92,
      ingredients: ["Aqua/Water", "Glycerin", "Butylene Glycol", "Niacinamide", "Panthenol"],
      keyIngredients: ["Niacinamide", "Hyaluronic Acid"],
      concerns: ["dryness", "dullness", "uneven skin tone"],
      suitableFor: ["all skin types"]
    },
    {
      id: "p5",
      name: "BHA Liquid Exfoliant",
      brand: "Paula's Choice",
      price: 29.99,
      category: "exfoliator",
      formulation: "liquid",
      rating: 4.8,
      reviewCount: 3421,
      image: "/api/placeholder/200/200",
      matchScore: 91,
      ingredients: ["Aqua/Water", "Methylpropanediol", "Salicylic Acid", "Green Tea Extract"],
      keyIngredients: ["Salicylic Acid 2%"],
      concerns: ["acne", "blackheads", "large pores", "uneven skin tone"],
      suitableFor: ["oily", "combination", "acne-prone"]
    },
    {
      id: "p6",
      name: "AHA 30% + BHA 2% Peeling Solution",
      brand: "The Ordinary",
      price: 7.50,
      category: "exfoliator",
      formulation: "solution",
      rating: 4.5,
      reviewCount: 2689,
      image: "/api/placeholder/200/200",
      matchScore: 75,
      ingredients: ["Aqua/Water", "Glycolic Acid", "Lactic Acid", "Salicylic Acid"],
      keyIngredients: ["Glycolic Acid", "Lactic Acid", "Salicylic Acid"],
      concerns: ["textural irregularities", "dullness", "signs of congestion"],
      suitableFor: ["experienced users", "not for sensitive skin"]
    },
    {
      id: "p7",
      name: "Niacinamide 10%",
      brand: "The Ordinary",
      price: 5.90,
      category: "serum",
      formulation: "serum",
      rating: 4.3,
      reviewCount: 4567,
      image: "/api/placeholder/200/200",
      matchScore: 96,
      ingredients: ["Aqua/Water", "Niacinamide", "Zinc PCA", "Glycerin"],
      keyIngredients: ["Niacinamide 10%", "Zinc 1%"],
      concerns: ["acne", "enlarged pores", "uneven skin tone"],
      suitableFor: ["all skin types", "especially oily and combination"]
    },
    {
      id: "p8",
      name: "Retinol Serum",
      brand: "Paula's Choice",
      price: 42.00,
      category: "serum",
      formulation: "serum",
      rating: 4.7,
      reviewCount: 1256,
      image: "/api/placeholder/200/200",
      matchScore: 89,
      ingredients: ["Aqua/Water", "Glycerin", "Butylene Glycol", "Retinol", "Ceramides"],
      keyIngredients: ["Retinol 0.3%", "Peptides"],
      concerns: ["aging", "fine lines", "uneven skin tone"],
      suitableFor: ["all skin types except sensitive", "evening use only"]
    },
    {
      id: "p9",
      name: "Vitamin C Suspension 23%",
      brand: "The Ordinary",
      price: 5.80,
      category: "serum",
      formulation: "suspension",
      rating: 4.0,
      reviewCount: 2190,
      image: "/api/placeholder/200/200",
      matchScore: 84,
      ingredients: ["Ascorbic Acid", "Squalane", "Isodecyl Neopentanoate"],
      keyIngredients: ["Vitamin C 23%"],
      concerns: ["dullness", "uneven skin tone", "signs of aging"],
      suitableFor: ["all skin types", "not with niacinamide"]
    },
    {
      id: "p10",
      name: "Oil-Free Moisturizer",
      brand: "Neutrogena",
      price: 12.99,
      category: "moisturizer",
      formulation: "gel",
      rating: 4.4,
      reviewCount: 3589,
      image: "/api/placeholder/200/200",
      matchScore: 94,
      ingredients: ["Aqua/Water", "Glycerin", "Dimethicone", "Sodium Hyaluronate"],
      keyIngredients: ["Hyaluronic Acid"],
      concerns: ["oiliness", "acne", "hydration"],
      suitableFor: ["oily", "combination", "acne-prone"]
    },
    {
      id: "p11",
      name: "Night Recovery Cream",
      brand: "CeraVe",
      price: 16.99,
      category: "moisturizer",
      formulation: "cream",
      rating: 4.6,
      reviewCount: 2876,
      image: "/api/placeholder/200/200",
      matchScore: 90,
      ingredients: ["Aqua/Water", "Glycerin", "Shea Butter", "Ceramides", "Niacinamide"],
      keyIngredients: ["Ceramides", "Niacinamide", "Hyaluronic Acid"],
      concerns: ["dryness", "barrier repair", "hydration"],
      suitableFor: ["all skin types", "especially dry and normal"]
    },
    {
      id: "p12",
      name: "Ultra Facial Cream",
      brand: "Kiehl's",
      price: 32.00,
      category: "moisturizer",
      formulation: "cream",
      rating: 4.7,
      reviewCount: 4231,
      image: "/api/placeholder/200/200",
      matchScore: 82,
      ingredients: ["Aqua/Water", "Glycerin", "Squalane", "Glycerin", "Panthenol"],
      keyIngredients: ["Squalane", "Glacial Glycoprotein"],
      concerns: ["dryness", "hydration"],
      suitableFor: ["all skin types"]
    },
    {
      id: "p13",
      name: "SPF 50 Sunscreen",
      brand: "La Roche-Posay",
      price: 34.99,
      category: "sunscreen",
      formulation: "fluid",
      rating: 4.6,
      reviewCount: 3456,
      image: "/api/placeholder/200/200",
      matchScore: 95,
      ingredients: ["Aqua/Water", "Avobenzone", "Homosalate", "Octisalate", "Octocrylene"],
      keyIngredients: ["Avobenzone", "Mexoryl"],
      concerns: ["sun protection", "anti-aging", "hyperpigmentation"],
      suitableFor: ["all skin types", "sensitive"]
    },
    {
      id: "p14",
      name: "Mineral Sunscreen SPF 30",
      brand: "CeraVe",
      price: 15.99,
      category: "sunscreen",
      formulation: "lotion",
      rating: 4.3,
      reviewCount: 1876,
      image: "/api/placeholder/200/200",
      matchScore: 88,
      ingredients: ["Aqua/Water", "Zinc Oxide", "Titanium Dioxide", "Ceramides", "Niacinamide"],
      keyIngredients: ["Zinc Oxide 10%", "Titanium Dioxide 5.5%", "Ceramides"],
      concerns: ["sun protection", "sensitivity", "redness"],
      suitableFor: ["all skin types", "especially sensitive"]
    }
  ],
  ingredients: [
    {
      id: "i1",
      name: "Niacinamide",
      aliases: ["Vitamin B3", "Nicotinamide"],
      category: "Active Ingredient",
      functions: ["Barrier Support", "Anti-inflammatory", "Sebum Regulation"],
      efficacyFor: [
        { concern: "Acne", level: "Moderate" },
        { concern: "Hyperpigmentation", level: "Moderate" },
        { concern: "Redness", level: "High" }
      ],
      mechanisms: ["Ceramide Production", "Anti-inflammatory"],
      recommendedConcentration: "2-10%",
      scientificEvidence: "Level 1 - Multiple RCTs",
      synergisticWith: ["Zinc", "Hyaluronic Acid"],
      incompatibleWith: ["Vitamin C (L-Ascorbic Acid)"],
      description: "Niacinamide is a versatile ingredient that helps improve skin barrier function, reduce inflammation, and regulate oil production. It's well-tolerated by most skin types."
    },
    {
      id: "i2",
      name: "Salicylic Acid",
      aliases: ["BHA", "Beta Hydroxy Acid"],
      category: "Exfoliant",
      functions: ["Exfoliation", "Anti-inflammatory", "Pore Clearing"],
      efficacyFor: [
        { concern: "Acne", level: "High" },
        { concern: "Blackheads", level: "High" },
        { concern: "Oiliness", level: "Moderate" }
      ],
      mechanisms: ["Keratolytic", "Lipophilic Exfoliation"],
      recommendedConcentration: "0.5-2%",
      scientificEvidence: "Level 1 - Multiple RCTs",
      synergisticWith: ["Glycolic Acid", "Benzoyl Peroxide"],
      incompatibleWith: ["pH-sensitive ingredients"],
      description: "Salicylic Acid is oil-soluble, allowing it to penetrate pores and exfoliate from within. It's excellent for treating and preventing acne, blackheads, and excess oil."
    },
    {
      id: "i3",
      name: "Hyaluronic Acid",
      aliases: ["HA", "Sodium Hyaluronate"],
      category: "Humectant",
      functions: ["Hydration", "Plumping", "Moisture Retention"],
      efficacyFor: [
        { concern: "Dryness", level: "High" },
        { concern: "Fine Lines", level: "Moderate" },
        { concern: "Dullness", level: "Moderate" }
      ],
      mechanisms: ["Water Binding", "Humectant"],
      recommendedConcentration: "1-2%",
      scientificEvidence: "Level 2 - Limited RCTs",
      synergisticWith: ["Glycerin", "Ceramides"],
      incompatibleWith: [],
      description: "Hyaluronic Acid is a powerful humectant that can hold up to 1000x its weight in water, providing intense hydration to the skin without heaviness."
    },
    {
      id: "i4",
      name: "Retinol",
      aliases: ["Vitamin A"],
      category: "Retinoid",
      functions: ["Cell Turnover", "Collagen Stimulation", "Pore Regulation"],
      efficacyFor: [
        { concern: "Aging", level: "High" },
        { concern: "Acne", level: "Moderate" },
        { concern: "Hyperpigmentation", level: "Moderate" }
      ],
      mechanisms: ["Cell Communication", "Gene Regulation"],
      recommendedConcentration: "0.1-1%",
      scientificEvidence: "Level 1 - Multiple RCTs",
      synergisticWith: ["Peptides", "Niacinamide"],
      incompatibleWith: ["AHAs", "BHAs", "Vitamin C", "Benzoyl Peroxide"],
      description: "Retinol is considered the gold standard for anti-aging by dermatologists. It speeds cell turnover, boosts collagen, and improves multiple skin concerns."
    },
    {
      id: "i5",
      name: "Vitamin C",
      aliases: ["L-Ascorbic Acid", "Ascorbic Acid"],
      category: "Antioxidant",
      functions: ["Brightening", "Antioxidant Protection", "Collagen Support"],
      efficacyFor: [
        { concern: "Hyperpigmentation", level: "High" },
        { concern: "Dullness", level: "High" },
        { concern: "Photo-aging", level: "Moderate" }
      ],
      mechanisms: ["Tyrosinase Inhibition", "Free Radical Neutralization"],
      recommendedConcentration: "10-20%",
      scientificEvidence: "Level 1 - Multiple RCTs",
      synergisticWith: ["Vitamin E", "Ferulic Acid"],
      incompatibleWith: ["Niacinamide", "Copper Peptides"],
      description: "Vitamin C is a potent antioxidant that brightens skin, protects from environmental damage, and supports collagen production for firmer skin."
    }
  ],
  skinConcerns: [
    {
      id: "c1",
      name: "Acne",
      description: "Pimples, blackheads, and cysts",
      recommendedIngredients: ["Salicylic Acid", "Benzoyl Peroxide", "Niacinamide", "Zinc"],
      subcategories: ["Comedonal Acne", "Inflammatory Acne", "Cystic Acne", "Hormonal Acne"]
    },
    {
      id: "c2",
      name: "Hyperpigmentation",
      description: "Dark spots and uneven skin tone",
      recommendedIngredients: ["Vitamin C", "Niacinamide", "Alpha Arbutin", "Tranexamic Acid"],
      subcategories: ["Post-Inflammatory Hyperpigmentation", "Melasma", "Sun Spots", "Age Spots"]
    },
    {
      id: "c3",
      name: "Aging",
      description: "Fine lines and wrinkles",
      recommendedIngredients: ["Retinol", "Peptides", "Vitamin C", "Niacinamide"],
      subcategories: ["Fine Lines", "Wrinkles", "Loss of Firmness", "Uneven Texture"]
    },
    {
      id: "c4",
      name: "Dryness",
      description: "Lack of moisture in skin",
      recommendedIngredients: ["Hyaluronic Acid", "Glycerin", "Ceramides", "Squalane"],
      subcategories: ["Dehydration", "Flakiness", "Tight Feeling", "Rough Texture"]
    },
    {
      id: "c5",
      name: "Sensitivity",
      description: "Easily irritated skin",
      recommendedIngredients: ["Centella Asiatica", "Oat Extract", "Aloe Vera", "Panthenol"],
      subcategories: ["Redness", "Irritation", "Rosacea", "Eczema"]
    }
  ]
};