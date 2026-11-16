/**
 * JEE Question Generator - Core Application Script
 * Full-featured interactive JEE preparation app with Dark & Light theme support.
 */

(function () {
  'use strict';

  // --- 1. SYLLABUS DATA ---
  const SUBJECTS = ['Physics', 'Chemistry', 'Mathematics'];

  const SUBJECT_THEME = {
    Physics: {
      color: 'blue',
      badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-800',
      bar: 'bg-blue-600',
      border: 'border-blue-500',
    },
    Chemistry: {
      color: 'emerald',
      badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-800',
      bar: 'bg-emerald-600',
      border: 'border-emerald-500',
    },
    Mathematics: {
      color: 'violet',
      badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 dark:border-violet-800',
      bar: 'bg-violet-600',
      border: 'border-violet-500',
    },
  };

  const CHAPTERS = [
    // Physics 11
    { id: 'p11-1', subject: 'Physics', class: 11, name: 'Units and Measurements', topics: ['SI units and dimensions', 'Errors and significant figures', 'Dimensional analysis'] },
    { id: 'p11-2', subject: 'Physics', class: 11, name: 'Kinematics', topics: ['Motion in 1D', 'Projectile motion', 'Relative velocity', 'Graphs of motion'] },
    { id: 'p11-3', subject: 'Physics', class: 11, name: 'Laws of Motion', topics: ["Newton's laws", 'Friction', 'Circular dynamics', 'Constraint motion'] },
    { id: 'p11-4', subject: 'Physics', class: 11, name: 'Work, Energy and Power', topics: ['Work-energy theorem', 'Conservative forces', 'Collisions', 'Power'] },
    { id: 'p11-5', subject: 'Physics', class: 11, name: 'Rotational Motion', topics: ['Centre of mass', 'Torque and angular momentum', 'Moment of inertia', 'Rolling motion'] },
    { id: 'p11-6', subject: 'Physics', class: 11, name: 'Gravitation', topics: ["Newton's law of gravitation", 'Gravitational potential', 'Orbital and escape velocity', "Kepler's laws"] },
    { id: 'p11-7', subject: 'Physics', class: 11, name: 'Properties of Solids and Liquids', topics: ['Elasticity', 'Fluid pressure and Bernoulli', 'Viscosity and surface tension'] },
    { id: 'p11-8', subject: 'Physics', class: 11, name: 'Thermodynamics', topics: ['Laws of thermodynamics', 'Thermodynamic processes', 'Heat engines', 'Heat transfer'] },
    { id: 'p11-9', subject: 'Physics', class: 11, name: 'Kinetic Theory of Gases', topics: ['Gas laws', 'RMS speed', 'Degrees of freedom', 'Mean free path'] },
    { id: 'p11-10', subject: 'Physics', class: 11, name: 'Oscillations and Waves', topics: ['Simple harmonic motion', 'Spring and pendulum', 'Wave motion', 'Doppler effect'] },
    // Physics 12
    { id: 'p12-1', subject: 'Physics', class: 12, name: 'Electrostatics', topics: ["Coulomb's law", 'Electric field and potential', "Gauss's law", 'Capacitors'] },
    { id: 'p12-2', subject: 'Physics', class: 12, name: 'Current Electricity', topics: ["Ohm's law", "Kirchhoff's rules", 'Wheatstone bridge', 'Heating effect'] },
    { id: 'p12-3', subject: 'Physics', class: 12, name: 'Magnetic Effects of Current', topics: ['Biot-Savart law', "Ampere's law", 'Force on moving charges', 'Magnetic materials'] },
    { id: 'p12-4', subject: 'Physics', class: 12, name: 'Electromagnetic Induction & AC', topics: ["Faraday's and Lenz's laws", 'Self and mutual inductance', 'LCR circuits', 'Transformers'] },
    { id: 'p12-5', subject: 'Physics', class: 12, name: 'Electromagnetic Waves', topics: ['EM spectrum', 'Displacement current', 'Properties of EM waves'] },
    { id: 'p12-6', subject: 'Physics', class: 12, name: 'Optics', topics: ['Reflection and refraction', 'Lenses and mirrors', 'Wave optics (YDSE)', 'Optical instruments'] },
    { id: 'p12-7', subject: 'Physics', class: 12, name: 'Dual Nature of Matter', topics: ['Photoelectric effect', 'de Broglie wavelength', 'Davisson-Germer experiment'] },
    { id: 'p12-8', subject: 'Physics', class: 12, name: 'Atoms and Nuclei', topics: ['Bohr model', 'Hydrogen spectrum', 'Radioactivity', 'Binding energy'] },
    { id: 'p12-9', subject: 'Physics', class: 12, name: 'Electronic Devices', topics: ['Semiconductors', 'p-n junction diode', 'Logic gates'] },

    // Chemistry 11
    { id: 'c11-1', subject: 'Chemistry', class: 11, name: 'Some Basic Concepts of Chemistry', topics: ['Mole concept', 'Stoichiometry', 'Concentration terms'] },
    { id: 'c11-2', subject: 'Chemistry', class: 11, name: 'Structure of Atom', topics: ['Bohr model', 'Quantum numbers', 'Electronic configuration', 'de Broglie and Heisenberg'] },
    { id: 'c11-3', subject: 'Chemistry', class: 11, name: 'Classification of Elements', topics: ['Periodic trends', 'Ionisation enthalpy', 'Electronegativity'] },
    { id: 'c11-4', subject: 'Chemistry', class: 11, name: 'Chemical Bonding', topics: ['VSEPR theory', 'Hybridisation', 'Molecular orbital theory', 'Hydrogen bonding'] },
    { id: 'c11-5', subject: 'Chemistry', class: 11, name: 'Chemical Thermodynamics', topics: ['First law and enthalpy', 'Entropy and Gibbs energy', "Hess's law"] },
    { id: 'c11-6', subject: 'Chemistry', class: 11, name: 'Equilibrium', topics: ['Chemical equilibrium (Kc, Kp)', "Le Chatelier's principle", 'Ionic equilibrium and pH', 'Buffers and solubility product'] },
    { id: 'c11-7', subject: 'Chemistry', class: 11, name: 'Redox Reactions', topics: ['Oxidation numbers', 'Balancing redox equations', 'Electrochemical series'] },
    { id: 'c11-8', subject: 'Chemistry', class: 11, name: 'Basic Principles of Organic Chem', topics: ['IUPAC nomenclature', 'Isomerism', 'Electronic effects', 'Reaction intermediates'] },
    { id: 'c11-9', subject: 'Chemistry', class: 11, name: 'Hydrocarbons', topics: ['Alkanes', 'Alkenes and alkynes', 'Aromatic hydrocarbons', 'Electrophilic substitution'] },
    // Chemistry 12
    { id: 'c12-1', subject: 'Chemistry', class: 12, name: 'Solutions', topics: ["Raoult's law", 'Colligative properties', "van't Hoff factor"] },
    { id: 'c12-2', subject: 'Chemistry', class: 12, name: 'Electrochemistry', topics: ['Galvanic cells and EMF', 'Nernst equation', "Kohlrausch's law", 'Electrolysis'] },
    { id: 'c12-3', subject: 'Chemistry', class: 12, name: 'Chemical Kinetics', topics: ['Rate law and order', 'Integrated rate equations', 'Arrhenius equation'] },
    { id: 'c12-4', subject: 'Chemistry', class: 12, name: 'p-Block Elements', topics: ['Group 15-18 elements', 'Oxoacids', 'Interhalogens'] },
    { id: 'c12-5', subject: 'Chemistry', class: 12, name: 'd- and f-Block Elements', topics: ['Transition metal properties', 'KMnO4 and K2Cr2O7', 'Lanthanoids and actinoids'] },
    { id: 'c12-6', subject: 'Chemistry', class: 12, name: 'Coordination Compounds', topics: ["Werner's theory", 'Nomenclature and isomerism', 'Crystal field theory'] },
    { id: 'c12-7', subject: 'Chemistry', class: 12, name: 'Haloalkanes and Haloarenes', topics: ['SN1 and SN2', 'Elimination reactions', 'Named reactions'] },
    { id: 'c12-8', subject: 'Chemistry', class: 12, name: 'Alcohols, Phenols and Ethers', topics: ['Preparation and properties', 'Acidity of phenols', 'Ether cleavage'] },
    { id: 'c12-9', subject: 'Chemistry', class: 12, name: 'Aldehydes, Ketones & Carboxylic Acids', topics: ['Nucleophilic addition', 'Aldol and Cannizzaro', 'Carboxylic acid acidity'] },
    { id: 'c12-10', subject: 'Chemistry', class: 12, name: 'Amines', topics: ['Basicity of amines', 'Diazonium salts', 'Hinsberg test'] },
    { id: 'c12-11', subject: 'Chemistry', class: 12, name: 'Biomolecules', topics: ['Carbohydrates', 'Amino acids and proteins', 'Nucleic acids'] },

    // Mathematics 11
    { id: 'm11-1', subject: 'Mathematics', class: 11, name: 'Sets, Relations and Functions', topics: ['Set operations', 'Types of relations', 'Domain and range'] },
    { id: 'm11-2', subject: 'Mathematics', class: 11, name: 'Complex Numbers & Quadratic Eq', topics: ['Algebra of complex numbers', 'Roots of unity', 'Nature of roots', 'Inequalities'] },
    { id: 'm11-3', subject: 'Mathematics', class: 11, name: 'Sequences and Series', topics: ['AP, GP, HP', 'Special series', 'AM-GM inequality'] },
    { id: 'm11-4', subject: 'Mathematics', class: 11, name: 'Permutations & Combinations', topics: ['Fundamental counting', 'Arrangements', 'Selections and distributions'] },
    { id: 'm11-5', subject: 'Mathematics', class: 11, name: 'Binomial Theorem', topics: ['General term', 'Middle term', 'Properties of coefficients'] },
    { id: 'm11-6', subject: 'Mathematics', class: 11, name: 'Trigonometry', topics: ['Identities', 'Trigonometric equations', 'Properties of triangles'] },
    { id: 'm11-7', subject: 'Mathematics', class: 11, name: 'Straight Lines and Circles', topics: ['Slope and distance forms', 'Pair of lines', 'Circle equations and tangents'] },
    { id: 'm11-8', subject: 'Mathematics', class: 11, name: 'Conic Sections', topics: ['Parabola', 'Ellipse', 'Hyperbola'] },
    { id: 'm11-9', subject: 'Mathematics', class: 11, name: 'Limits and Derivatives', topics: ['Standard limits', "L'Hopital's rule", 'First principles'] },
    { id: 'm11-10', subject: 'Mathematics', class: 11, name: 'Statistics & Reasoning', topics: ['Mean and variance', 'Mathematical reasoning'] },
    // Mathematics 12
    { id: 'm12-1', subject: 'Mathematics', class: 12, name: 'Matrices and Determinants', topics: ['Matrix operations', 'Properties of determinants', 'Adjoint and inverse', 'Linear systems'] },
    { id: 'm12-2', subject: 'Mathematics', class: 12, name: 'Inverse Trigonometric Functions', topics: ['Principal values', 'Identities'] },
    { id: 'm12-3', subject: 'Mathematics', class: 12, name: 'Continuity and Differentiability', topics: ['Continuity', 'Differentiability', 'Chain rule and implicit differentiation'] },
    { id: 'm12-4', subject: 'Mathematics', class: 12, name: 'Applications of Derivatives', topics: ['Tangents and normals', 'Maxima and minima', 'Monotonicity'] },
    { id: 'm12-5', subject: 'Mathematics', class: 12, name: 'Integrals', topics: ['Standard integrals', 'Substitution and parts', 'Definite integrals properties'] },
    { id: 'm12-6', subject: 'Mathematics', class: 12, name: 'Application of Integrals', topics: ['Area under curves', 'Area between curves'] },
    { id: 'm12-7', subject: 'Mathematics', class: 12, name: 'Differential Equations', topics: ['Order and degree', 'Variable separable', 'Linear differential equations'] },
    { id: 'm12-8', subject: 'Mathematics', class: 12, name: 'Vector Algebra', topics: ['Dot and cross products', 'Scalar triple product'] },
    { id: 'm12-9', subject: 'Mathematics', class: 12, name: 'Three Dimensional Geometry', topics: ['Direction cosines', 'Lines in space', 'Shortest distance'] },
    { id: 'm12-10', subject: 'Mathematics', class: 12, name: 'Probability', topics: ['Conditional probability', "Bayes' theorem", 'Binomial distribution'] },
  ];

  // Helper to find chapters
  function getChapters(subject, cls) {
    return CHAPTERS.filter(c => (!subject || c.subject === subject) && (!cls || c.class === parseInt(cls, 10)));
  }

  // --- 2. QUESTION BANK & DYNAMIC GENERATOR ---
  const CURATED_QUESTIONS = [
    // Physics Questions
    {
      id: 'q-p-1',
      subject: 'Physics',
      chapter: 'Kinematics',
      topic: 'Projectile motion',
      difficulty: 'JEE Main',
      type: 'Single Correct',
      question: 'A projectile is launched from ground level with speed u = 40 m/s at an angle θ = 30° to the horizontal. Taking g = 10 m/s², the maximum height H and the horizontal range R reached by the projectile are respectively:',
      options: [
        'H = 20 m, R = 80√3 m',
        'H = 20 m, R = 40√3 m',
        'H = 40 m, R = 80√3 m',
        'H = 10 m, R = 60√3 m',
      ],
      correctIndex: 0,
      solution: `Step 1: Formula for maximum height:\n  H = (u² sin²θ) / (2g)\n  Given u = 40 m/s, θ = 30° (sin 30° = 1/2), g = 10 m/s²:\n  H = (40² × (1/2)²) / (2 × 10) = (1600 × 1/4) / 20 = 400 / 20 = 20 m.\n\nStep 2: Formula for horizontal range:\n  R = (u² sin 2θ) / g\n  sin 2θ = sin 60° = √3 / 2\n  R = (1600 × (√3 / 2)) / 10 = 160 × √3 / 2 = 80√3 m.\n\nTherefore, H = 20 m and R = 80√3 m. Correct option is (A).`,
      tip: 'Remember that R = 4H cot θ is a useful direct relation connecting range, maximum height, and launch angle!',
    },
    {
      id: 'q-p-2',
      subject: 'Physics',
      chapter: 'Electrostatics',
      topic: 'Capacitors',
      difficulty: 'JEE Advanced',
      type: 'Single Correct',
      question: 'A parallel plate capacitor with plate area A and separation d is filled with two dielectric slabs of dielectric constants K₁ = 3 and K₂ = 6, each of thickness d/2 stacked in series. If the vacuum capacitance is C₀ = ε₀A/d, what is the effective capacitance C of this combination?',
      options: ['2 C₀', '4 C₀', '4.5 C₀', '3 C₀'],
      correctIndex: 1,
      solution: `Step 1: Two slabs stacked along the separation d form two capacitors in series:\n  C₁ = K₁ ε₀ A / (d/2) = 2 K₁ C₀ = 2(3) C₀ = 6 C₀\n  C₂ = K₂ ε₀ A / (d/2) = 2 K₂ C₀ = 2(6) C₀ = 12 C₀\n\nStep 2: Equivalent series capacitance:\n  1/C = 1/C₁ + 1/C₂ = 1/(6 C₀) + 1/(12 C₀) = (2 + 1)/(12 C₀) = 3 / (12 C₀) = 1 / (4 C₀)\n\nHence, C = 4 C₀. Correct option is (B).`,
      tip: 'When slabs divide the gap thickness d, they are in SERIES. When they divide the area A, they are in PARALLEL.',
    },
    {
      id: 'q-p-3',
      subject: 'Physics',
      chapter: 'Thermodynamics',
      topic: 'Heat engines',
      difficulty: 'JEE Main',
      type: 'Single Correct',
      question: 'A Carnot engine operates between a source at T₁ = 500 K and a sink at T₂ = 300 K. If it absorbs 1000 J of heat from the source in each cycle, the work done per cycle is:',
      options: ['400 J', '600 J', '200 J', '800 J'],
      correctIndex: 0,
      solution: `Step 1: Carnot efficiency η = 1 - (T₂ / T₁)\n  η = 1 - (300 / 500) = 1 - 0.6 = 0.40 (or 40%).\n\nStep 2: Work done W = η × Q_in\n  W = 0.40 × 1000 J = 400 J.\n\nHeat rejected to sink Q₂ = Q₁ - W = 600 J. Correct option is (A).`,
      tip: 'Always convert temperatures into Kelvin (absolute temperature) before calculating efficiency.',
    },
    {
      id: 'q-p-4',
      subject: 'Physics',
      chapter: 'Rotational Motion',
      topic: 'Moment of inertia',
      difficulty: 'JEE Advanced',
      type: 'Single Correct',
      question: 'A solid cylinder of mass M and radius R rolls without slipping down an inclined plane of inclination θ. The linear acceleration of its centre of mass is:',
      options: ['(2/3) g sin θ', '(1/2) g sin θ', '(3/4) g sin θ', 'g sin θ'],
      correctIndex: 0,
      solution: `Step 1: For rolling without slipping on an incline of angle θ:\n  a = (g sin θ) / (1 + I / (MR²))\n\nStep 2: For a solid cylinder, I = (1/2) MR².\n  Hence, I / (MR²) = 1/2.\n\nStep 3: Calculate acceleration:\n  a = (g sin θ) / (1 + 1/2) = (g sin θ) / (3/2) = (2/3) g sin θ.\n\nCorrect option is (A).`,
      tip: 'Compare: Ring = (1/2)g sin θ, Solid cylinder/disc = (2/3)g sin θ, Solid sphere = (5/7)g sin θ.',
    },

    // Chemistry Questions
    {
      id: 'q-c-1',
      subject: 'Chemistry',
      chapter: 'Chemical Bonding',
      topic: 'Hybridisation',
      difficulty: 'JEE Main',
      type: 'Single Correct',
      question: 'According to VSEPR theory and hybridization concepts, the geometry and hybridization of the central xenon atom in XeF₄ are:',
      options: [
        'Square planar, sp³d²',
        'Tetrahedral, sp³',
        'Octahedral, sp³d²',
        'See-saw, sp³d',
      ],
      correctIndex: 0,
      solution: `Step 1: Count valence electrons of Xe = 8.\nStep 2: Number of bonding pairs (F atoms) = 4.\nStep 3: Remaining valence electrons = 8 - 4 = 4 electrons, which means 2 lone pairs.\nStep 4: Steric number = Bond pairs (4) + Lone pairs (2) = 6.\n  Steric number 6 corresponds to sp³d² hybridization (octahedral electron geometry).\nStep 5: With 2 lone pairs situated opposite to each other (axial positions) to minimize repulsion, the molecular shape is square planar.\n\nCorrect option is (A).`,
      tip: 'XeF₂ is linear (sp³d), XeF₄ is square planar (sp³d²), and XeF₆ is distorted octahedral (sp³d³).',
    },
    {
      id: 'q-c-2',
      subject: 'Chemistry',
      chapter: 'Equilibrium',
      topic: 'Ionic equilibrium and pH',
      difficulty: 'JEE Main',
      type: 'Single Correct',
      question: 'The solubility product Ksp of AgCl at 298 K is 1.0 × 10⁻¹⁰. What is the solubility of AgCl in a 0.01 M NaCl solution? (Assume complete dissociation of NaCl)',
      options: ['1.0 × 10⁻⁸ M', '1.0 × 10⁻⁵ M', '1.0 × 10⁻¹⁰ M', '2.0 × 10⁻⁸ M'],
      correctIndex: 0,
      solution: `Step 1: Dissociation equilibria:\n  AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq), Ksp = [Ag⁺][Cl⁻]\n  NaCl → Na⁺(0.01 M) + Cl⁻(0.01 M)\n\nStep 2: Common ion effect:\n  Let s be the solubility of AgCl in NaCl.\n  [Ag⁺] = s\n  [Cl⁻] = 0.01 + s ≈ 0.01 M (since s << 0.01)\n\nStep 3: Substitute into Ksp:\n  Ksp = s × 0.01 = 1.0 × 10⁻¹⁰\n  s = (1.0 × 10⁻¹⁰) / (10⁻²) = 1.0 × 10⁻⁸ M.\n\nCorrect option is (A).`,
      tip: 'Common ions always suppress the solubility of sparingly soluble salts dramatically due to Le Chatelier’s principle.',
    },
    {
      id: 'q-c-3',
      subject: 'Chemistry',
      chapter: 'Coordination Compounds',
      topic: 'Crystal field theory',
      difficulty: 'JEE Advanced',
      type: 'Single Correct',
      question: 'Which of the following complex ions is diamagnetic and has d²sp³ hybridization?',
      options: [
        '[Co(NH₃)₆]³⁺',
        '[CoF₆]³⁻',
        '[Ni(CO)₄]',
        '[Fe(H₂O)₆]²⁺',
      ],
      correctIndex: 0,
      solution: `Step 1: In [Co(NH₃)₆]³⁺, the oxidation state of Co is +3 (Co: [Ar] 3d⁷ 4s² -> Co³⁺: 3d⁶).\nStep 2: NH₃ acts as a strong field ligand for Co³⁺, causing pairing of all 6 electrons in the 3d orbitals (t₂g⁶ eg⁰).\nStep 3: All electrons are paired, making the complex diamagnetic.\nStep 4: Two 3d orbitals are vacant, allowing inner orbital hybridization d²sp³ (octahedral).\n\nContrast: [CoF₆]³⁻ has weak ligand F⁻ (sp³d², paramagnetic with 4 unpaired electrons). [Ni(CO)₄] is sp³ tetrahedral.\n\nCorrect option is (A).`,
      tip: 'NH₃ acts as a strong field ligand with Co³⁺ and causes spin pairing, but acts as a weaker field ligand with some divalent cations like Co²⁺ or Fe²⁺.',
    },
    {
      id: 'q-c-4',
      subject: 'Chemistry',
      chapter: 'Chemical Kinetics',
      topic: 'Integrated rate equations',
      difficulty: 'JEE Main',
      type: 'Single Correct',
      question: 'For a first-order reaction A → Products, the half-life t₁/₂ is 20 minutes. What percentage of the initial reactant A remains unreacted after 60 minutes?',
      options: ['12.5%', '25%', '6.25%', '50%'],
      correctIndex: 0,
      solution: `Step 1: Number of half-lives elapsed: n = Total time / t₁/₂ = 60 min / 20 min = 3 half-lives.\nStep 2: Remaining concentration fraction after n half-lives:\n  [A] / [A]₀ = (1/2)ⁿ = (1/2)³ = 1/8.\nStep 3: Percentage remaining:\n  (1/8) × 100% = 12.5%.\n\nCorrect option is (A).`,
      tip: 'Fraction remaining after n half-lives = (1/2)ⁿ. Fraction reacted = 1 - (1/2)ⁿ.',
    },

    // Mathematics Questions
    {
      id: 'q-m-1',
      subject: 'Mathematics',
      chapter: 'Integrals',
      topic: 'Definite integrals properties',
      difficulty: 'JEE Main',
      type: 'Single Correct',
      question: 'The value of the definite integral I = ∫₀^(π/2) (sin³x) / (sin³x + cos³x) dx is equal to:',
      options: ['π/4', 'π/2', 'π/8', '1'],
      correctIndex: 0,
      solution: `Step 1: Apply King’s Property ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx:\n  I = ∫₀^(π/2) (sin³(π/2 - x)) / (sin³(π/2 - x) + cos³(π/2 - x)) dx\n  Since sin(π/2 - x) = cos x and cos(π/2 - x) = sin x:\n  I = ∫₀^(π/2) (cos³x) / (cos³x + sin³x) dx  --- (2)\n\nStep 2: Add equation (1) and equation (2):\n  2I = ∫₀^(π/2) [ (sin³x + cos³x) / (sin³x + cos³x) ] dx\n  2I = ∫₀^(π/2) 1 dx = [x]₀^(π/2) = π/2\n\nStep 3: Solve for I:\n  I = (π/2) / 2 = π/4.\n\nCorrect option is (A).`,
      tip: 'Whenever an integral is of the form ∫₀^(π/2) f(sin x) / [f(sin x) + f(cos x)] dx, the result is always (b - a)/2 = π/4!',
    },
    {
      id: 'q-m-2',
      subject: 'Mathematics',
      chapter: 'Matrices and Determinants',
      topic: 'Properties of determinants',
      difficulty: 'JEE Advanced',
      type: 'Single Correct',
      question: 'Let A be a 3 × 3 non-singular matrix such that |A| = 4. What is the value of the determinant |adj(2A)|?',
      options: ['256', '1024', '4096', '512'],
      correctIndex: 2,
      solution: `Step 1: Let B = 2A. For an n × n matrix (here n = 3):\n  |B| = |2A| = 2³ |A| = 8 × 4 = 32.\n\nStep 2: Formula for determinant of adjoint matrix:\n  |adj(B)| = |B|^(n - 1)\n  Here n = 3, so exponent is 3 - 1 = 2.\n\nStep 3: Calculate:\n  |adj(2A)| = |2A|² = (32)² = 1024 ... wait!\n  Let\'s verify: 32² = 1024? Wait, 32 × 32 = 1024.\n  Wait, let us check |adj(2A)| = |adj(B)| = |B|^(n-1) = (2³ |A|)² = (8 × 4)² = (32)² = 1024? Wait, option B is 1024!\n  Let\'s check: 4096 is 4^6. 32² = 1024. Therefore option B is 1024.`,
      options: ['256', '1024', '4096', '512'],
      correctIndex: 1,
      solution: `Step 1: Let matrix B = 2A. Since A is of order 3 × 3:\n  |B| = |2A| = 2³ × |A| = 8 × 4 = 32.\n\nStep 2: Use the standard property |adj(B)| = |B|^(n - 1) for an n × n matrix:\n  Here n = 3, so:\n  |adj(B)| = |B|^(3 - 1) = |B|²\n\nStep 3: Compute the final value:\n  |adj(2A)| = 32² = 1024.\n\nCorrect option is (B).`,
      tip: 'Remember two key determinant rules:\n1) |k A| = kⁿ |A|\n2) |adj(A)| = |A|^(n - 1)',
    },
    {
      id: 'q-m-3',
      subject: 'Mathematics',
      chapter: 'Complex Numbers & Quadratic Eq',
      topic: 'Roots of unity',
      difficulty: 'JEE Main',
      type: 'Single Correct',
      question: 'If ω is a non-real complex cube root of unity, then the value of (1 + ω - ω²)⁷ + (1 - ω + ω²)⁷ is:',
      options: ['-128', '128', '-256', '256'],
      correctIndex: 2,
      solution: `Step 1: Important properties of cube roots of unity:\n  1 + ω + ω² = 0 => 1 + ω = -ω², and 1 + ω² = -ω, and ω³ = 1.\n\nStep 2: Simplify the first term:\n  (1 + ω - ω²) = (-ω² - ω²) = -2ω²\n  (-2ω²)⁷ = (-2)⁷ (ω²)⁷ = -128 ω¹⁴ = -128 (ω³)⁴ · ω² = -128 ω²\n\nStep 3: Simplify the second term:\n  (1 - ω + ω²) = (-ω - ω) = -2ω\n  (-2ω)⁷ = (-2)⁷ ω⁷ = -128 (ω³)² · ω = -128 ω\n\nStep 4: Sum the two terms:\n  -128 ω² + (-128 ω) = -128 (ω² + ω)\n  Since 1 + ω + ω² = 0, we have ω² + ω = -1.\n  Value = -128 (-1) = +128? Wait!\n  Wait, let\'s recheck: (-2)⁷ = -128. -128 * (-1) = +128! Wait, let\'s check options!`,
      options: ['-128', '128', '-256', '256'],
      correctIndex: 1,
      solution: `Step 1: Using the relation 1 + ω + ω² = 0:\n  1 + ω = -ω²\n  1 + ω² = -ω\n\nStep 2: Evaluate each term:\n  Term 1: (1 + ω - ω²)⁷ = (-ω² - ω²)⁷ = (-2ω²)⁷ = -128 (ω¹⁴) = -128 ω²\n  Term 2: (1 - ω + ω²)⁷ = (-ω - ω)⁷ = (-2ω)⁷ = -128 (ω⁷) = -128 ω\n\nStep 3: Add them together:\n  Sum = -128 (ω² + ω) = -128 × (-1) = +128.\n\nCorrect option is (B).`,
      tip: 'Whenever you see terms like (1 + ω) or (1 + ω²), instantly replace them using 1 + ω + ω² = 0.',
    },
    {
      id: 'q-m-4',
      subject: 'Mathematics',
      chapter: 'Probability',
      topic: "Bayes' theorem",
      difficulty: 'JEE Advanced',
      type: 'Single Correct',
      question: 'Bag A contains 3 red and 4 black balls, while Bag B contains 5 red and 3 black balls. One ball is transferred from Bag A to Bag B and then a ball is drawn from Bag B. If the ball drawn from Bag B is red, what is the probability that the transferred ball was black?',
      options: ['16/31', '15/31', '20/41', '12/29'],
      correctIndex: 0,
      solution: `Step 1: Define events:\n  E₁: Transferred ball is red. P(E₁) = 3/7\n  E₂: Transferred ball is black. P(E₂) = 4/7\n  A: Ball drawn from Bag B is red.\n\nStep 2: Conditional probabilities:\n  - If red transferred: Bag B now has (5+1)=6 red, 3 black (total 9 balls).\n    P(A | E₁) = 6/9\n  - If black transferred: Bag B now has 5 red, (3+1)=4 black (total 9 balls).\n    P(A | E₂) = 5/9\n\nStep 3: Apply Bayes\' Theorem for P(E₂ | A):\n  P(E₂ | A) = [P(E₂) · P(A | E₂)] / [P(E₁) · P(A | E₁) + P(E₂) · P(A | E₂)]\n  Numerator = (4/7) × (5/9) = 20/63\n  Denominator = (3/7) × (6/9) + (4/7) × (5/9) = (18 + 20) / 63 = 38/63? Wait!\n  Wait: 20 / 38 = 10 / 19? Wait, let\'s check numbers:\n  Bag A: 3 red, 4 black (total 7).\n  Bag B: 4 red, 5 black? Let\'s make numbers clean:\n  If Bag B has 5 red and 4 black (total 9):\n  If Red transferred to Bag B (which had 5 red, 3 black, total 8):\n  Bag B had 8 balls originally! So after transfer it has 8 + 1 = 9 balls!\n  Numerator = (4/7) * (5/9) = 20/63\n  Denominator = (3/7 * 6/9) + (4/7 * 5/9) = (18 + 20)/63 = 38/63\n  Ratio = 20/38 = 10/19!`,
      options: ['10/19', '9/19', '12/25', '14/27'],
      correctIndex: 0,
      solution: `Step 1: Events:\n  E₁: Red ball transferred from Bag A to B. P(E₁) = 3/7\n  E₂: Black ball transferred from Bag A to B. P(E₂) = 4/7\n  R: A red ball is drawn from Bag B.\n\nStep 2: Bag B originally had 5 red + 3 black = 8 balls. After transfer, it has 9 balls:\n  P(R | E₁) = (5 + 1) / 9 = 6/9\n  P(R | E₂) = 5 / 9\n\nStep 3: By Bayes\' Theorem:\n  P(E₂ | R) = [P(E₂) × P(R | E₂)] / [P(E₁) × P(R | E₁) + P(E₂) × P(R | E₂)]\n  = (4/7 × 5/9) / [ (3/7 × 6/9) + (4/7 × 5/9) ]\n  = 20 / (18 + 20) = 20 / 38 = 10/19.\n\nCorrect option is (A).`,
      tip: 'Clearly identify the partition events first, write out their prior probabilities, and calculate likelihoods carefully before applying the Bayes formula.',
    },
  ];

  // Algorithmic Dynamic Question Generator
  function generateDynamicQuestion(subject, cls, chapterName, topicName, difficulty) {
    const s = subject || SUBJECTS[Math.floor(Math.random() * SUBJECTS.length)];
    const diff = difficulty || 'JEE Main';

    // Generators per subject
    if (s === 'Physics') {
      const u = (Math.floor(Math.random() * 5) + 2) * 10; // 20, 30, 40, 50, 60
      const angles = [30, 45, 60];
      const ang = angles[Math.floor(Math.random() * angles.length)];
      const g = 10;
      const sinMap = { 30: 0.5, 45: Math.SQRT1_2, 60: Math.sqrt(3) / 2 };
      const sinVal = sinMap[ang];
      const hMax = Math.round((u * u * sinVal * sinVal) / (2 * g) * 10) / 10;
      const sin2Map = { 30: Math.sqrt(3) / 2, 45: 1, 60: Math.sqrt(3) / 2 };
      const range = Math.round((u * u * sin2Map[ang]) / g * 10) / 10;

      return {
        id: 'gen-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
        subject: 'Physics',
        chapter: chapterName || 'Kinematics',
        topic: topicName || 'Projectile Motion',
        difficulty: diff,
        type: 'Single Correct',
        question: `A particle is projected from the ground with an initial velocity u = ${u} m/s at an angle θ = ${ang}° with the horizontal. Assuming acceleration due to gravity g = 10 m/s², find its maximum height (H_max) and approximate horizontal range (R).`,
        options: [
          `H = ${hMax} m, R = ${range} m`,
          `H = ${(hMax * 1.5).toFixed(1)} m, R = ${(range * 0.8).toFixed(1)} m`,
          `H = ${(hMax * 0.7).toFixed(1)} m, R = ${(range * 1.3).toFixed(1)} m`,
          `H = ${(hMax * 2).toFixed(1)} m, R = ${(range * 0.5).toFixed(1)} m`,
        ],
        correctIndex: 0,
        solution: `Formulae:\n1) Maximum Height: H = (u² sin²θ) / (2g)\n   = (${u}² × sin²(${ang}°)) / (2 × 10) = ${hMax} m.\n2) Horizontal Range: R = (u² sin 2θ) / g\n   = (${u}² × sin(${2 * ang}°)) / 10 = ${range} m.`,
        tip: 'Range is maximized at 45° where sin(2θ) = 1.',
      };
    } else if (s === 'Chemistry') {
      const halfLife = (Math.floor(Math.random() * 4) + 1) * 15; // 15, 30, 45, 60
      const multiples = [2, 3, 4];
      const m = multiples[Math.floor(Math.random() * multiples.length)];
      const totalTime = halfLife * m;
      const pctRemaining = (100 / Math.pow(2, m)).toFixed(2);
      const pctReacted = (100 - pctRemaining).toFixed(2);

      return {
        id: 'gen-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
        subject: 'Chemistry',
        chapter: chapterName || 'Chemical Kinetics',
        topic: topicName || 'First Order Kinetics',
        difficulty: diff,
        type: 'Single Correct',
        question: `A radioactive decay reaction follows first-order kinetics with a half-life of ${halfLife} minutes. What percentage of the initial substance will have decomposed after ${totalTime} minutes?`,
        options: [
          `${pctReacted}%`,
          `${pctRemaining}%`,
          `${(parseFloat(pctReacted) - 10).toFixed(2)}%`,
          `${(parseFloat(pctReacted) + 6).toFixed(2)}%`,
        ],
        correctIndex: 0,
        solution: `Step 1: Calculate number of half-lives:\n  n = Total time / t₁/₂ = ${totalTime} / ${halfLife} = ${m} half-lives.\nStep 2: Fraction remaining unreacted:\n  [A] / [A]₀ = (1/2)ᵐ = (1/2)^${m} = 1/${Math.pow(2, m)} = ${(1 / Math.pow(2, m)).toFixed(4)} (${pctRemaining}%).\nStep 3: Amount decomposed = 100% - ${pctRemaining}% = ${pctReacted}%.`,
        tip: 'Read the question carefully to see if it asks for percentage REMAINING or percentage DECOMPOSED!',
      };
    } else {
      const a = Math.floor(Math.random() * 4) + 2; // 2, 3, 4, 5
      const ans = Math.round(Math.PI / 4 * 100) / 100;

      return {
        id: 'gen-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
        subject: 'Mathematics',
        chapter: chapterName || 'Integrals',
        topic: topicName || 'Definite Integrals',
        difficulty: diff,
        type: 'Single Correct',
        question: `Evaluate the definite integral: I = ∫₀^(π/2) [ (sin^${a} x) / (sin^${a} x + cos^${a} x) ] dx.`,
        options: ['π/4', 'π/2', 'π/8', 'π/6'],
        correctIndex: 0,
        solution: `Apply property ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx:\n  I = ∫₀^(π/2) [ (cos^${a} x) / (cos^${a} x + sin^${a} x) ] dx.\nAdding both equations:\n  2I = ∫₀^(π/2) 1 dx = π/2 => I = π/4.`,
        tip: 'Independent of the power of trigonometric terms, this symmetry property yields (b - a)/2 = π/4.',
      };
    }
  }

  // --- 3. REVISION NOTES & FORMULA SHEETS ---
  const STUDY_NOTES = {
    Physics: [
      {
        title: 'Kinematics & Motion',
        class: 11,
        chapter: 'Kinematics',
        formulas: [
          'v = u + at,  s = ut + ½ at²,  v² = u² + 2as',
          'Trajectory: y = x tan θ - [g x² / (2 u² cos² θ)]',
          'Maximum Height: H = (u² sin² θ) / 2g',
          'Time of Flight: T = (2u sin θ) / g',
          'Horizontal Range: R = (u² sin 2θ) / g',
        ],
        points: [
          'Range is equal for complementary angles θ and (90° - θ).',
          'In relative motion, v_AB = v_A - v_B. Apply 1D equations in vector components.',
          'Area under v-t graph gives displacement; slope gives acceleration.',
        ],
      },
      {
        title: 'Work, Energy & Power',
        class: 11,
        chapter: 'Work, Energy and Power',
        formulas: [
          'Work done: W = ∫ F · dr',
          'Work-Energy Theorem: W_net = ΔK = ½ m v₂² - ½ m v₁²',
          'Potential Energy: F = -dU/dr',
          'Power: P = dW/dt = F · v',
        ],
        points: [
          'Work done by conservative forces along a closed loop is always zero.',
          'In elastic collision, both momentum and kinetic energy are conserved. Coefficient of restitution e = 1.',
        ],
      },
      {
        title: 'Electrostatics & Gauss Law',
        class: 12,
        chapter: 'Electrostatics',
        formulas: [
          'Coulomb’s Law: F = (1 / 4πε₀) (q₁q₂ / r²)',
          'Electric Field due to point charge: E = (1 / 4πε₀) (q / r²)',
          'Electric Potential: V = (1 / 4πε₀) (q / r)',
          'Gauss’s Law: ∮ E · dA = q_enclosed / ε₀',
          'Capacitance: C = ε₀ A / d; Energy U = ½ C V²',
        ],
        points: [
          'Electric field inside a conducting shell is always zero in electrostatic equilibrium.',
          'Dielectric insertion increases capacitance by factor K: C = K C₀.',
        ],
      },
      {
        title: 'Current Electricity',
        class: 12,
        chapter: 'Current Electricity',
        formulas: [
          'Ohm’s Law: V = IR,  J = σE',
          'Drift Velocity: v_d = eEτ / m,  I = n e A v_d',
          'Resistance: R = ρL / A = R₀(1 + αΔT)',
          'Kirchhoff’s Current Law: Σ I_junction = 0',
          'Kirchhoff’s Voltage Law: Σ ΔV_loop = 0',
        ],
        points: [
          'Internal resistance r of a cell: V = E - Ir during discharge, V = E + Ir during charging.',
          'Wheatstone bridge balanced condition: P/Q = R/S => No current flows through galvanometer.',
        ],
      },
    ],
    Chemistry: [
      {
        title: 'Chemical Bonding & Molecular Structure',
        class: 11,
        chapter: 'Chemical Bonding',
        formulas: [
          'Bond Order = ½ (N_b - N_a)',
          'Dipole moment: μ = q × d (Debye)',
          'Formal charge = V - L - ½ B',
        ],
        points: [
          'Paramagnetic molecules have unpaired electrons in MOT (e.g. O₂ has 2 unpaired electrons in π* orbitals).',
          'Hybridization steric number: SN = 2 (sp), 3 (sp²), 4 (sp³), 5 (sp³d), 6 (sp³d²).',
          'Repulsion order: Lone Pair - Lone Pair > Lone Pair - Bond Pair > Bond Pair - Bond Pair.',
        ],
      },
      {
        title: 'Equilibrium (Chemical & Ionic)',
        class: 11,
        chapter: 'Equilibrium',
        formulas: [
          'K_p = K_c (RT)^Δn_g',
          'pH = -log[H⁺],  pOH = -log[OH⁻],  pH + pOH = 14 (at 25°C)',
          'Henderson-Hasselbalch (Acidic Buffer): pH = pK_a + log([Conjugate Base] / [Acid])',
          'Solubility Product: For A_x B_y ⇌ x A^(y+) + y B^(x-), K_sp = x^x y^y s^(x+y)',
        ],
        points: [
          'Adding an inert gas at constant volume has no effect on equilibrium position.',
          'Endothermic reaction: Increasing temperature shifts equilibrium forward (K increases).',
        ],
      },
      {
        title: 'Electrochemistry',
        class: 12,
        chapter: 'Electrochemistry',
        formulas: [
          'Nernst Equation: E_cell = E°_cell - (0.0591 / n) log Q (at 298 K)',
          'Gibbs Energy: ΔG° = -n F E°_cell = -RT ln K',
          'Kohlrausch’s Law: Λ°_m = ν₊ λ₊° + ν₋ λ₋°',
          'Faraday’s First Law: w = z · I · t = (M / nF) · I · t',
        ],
        points: [
          'Standard Hydrogen Electrode (SHE) potential is defined as 0.00 V at all temperatures.',
          'A cell reaction is spontaneous if E°_cell > 0 and ΔG < 0.',
        ],
      },
    ],
    Mathematics: [
      {
        title: 'Definite Integrals & Properties',
        class: 12,
        chapter: 'Integrals',
        formulas: [
          'King’s Property: ∫_a^b f(x) dx = ∫_a^b f(a + b - x) dx',
          'Even/Odd: ∫_(-a)^a f(x) dx = 2 ∫_0^a f(x) dx (if even), 0 (if odd)',
          'Periodic: ∫_0^(nT) f(x) dx = n ∫_0^T f(x) dx',
          'Leibniz Rule: d/dx [∫_u(x)^v(x) f(t) dt] = f(v(x)) v\'(x) - f(u(x)) u\'(x)',
        ],
        points: [
          'Always look for symmetry with (a + b - x) to simplify trigonometric definite integrals.',
          'Newton-Leibniz formula is vital for finding limits of integral expressions.',
        ],
      },
      {
        title: 'Matrices & Determinants',
        class: 12,
        chapter: 'Matrices and Determinants',
        formulas: [
          '|kA| = kⁿ |A| for n × n matrix',
          '|adj A| = |A|^(n - 1)',
          '|A · adj A| = |A|ⁿ',
          'A⁻¹ = (1 / |A|) adj(A)',
          'Cramer’s Rule: x = Δ_x / Δ,  y = Δ_y / Δ,  z = Δ_z / Δ',
        ],
        points: [
          'If Δ ≠ 0, system of equations has a unique consistent solution.',
          'If Δ = 0 and at least one of Δ_x, Δ_y, Δ_z ≠ 0, no solution (inconsistent).',
          'If all Δ = Δ_x = Δ_y = Δ_z = 0, either infinite solutions or no solution.',
        ],
      },
      {
        title: 'Vectors & 3D Geometry',
        class: 12,
        chapter: 'Three Dimensional Geometry',
        formulas: [
          'Dot Product: a · b = |a||b| cos θ',
          'Cross Product: a × b = |a||b| sin θ n̂',
          'Shortest distance between skew lines: d = |(a₂ - a₁) · (b₁ × b₂)| / |b₁ × b₂|',
          'Distance of point from plane: d = |ax₁ + by₁ + cz₁ + d| / √(a² + b² + c²)',
        ],
        points: [
          'Two non-zero vectors are perpendicular if a · b = 0.',
          'Two non-zero vectors are parallel if a × b = 0.',
        ],
      },
    ],
  };

  // --- 4. APPLICATION STATE & PERSISTENCE ---
  const STORAGE_KEY = 'jee_question_gen_v4';
  const THEME_KEY = 'jee_theme';
  const AUTH_KEY = 'jee_auth_accounts_v3';

  // Load registered user accounts (No demo users - authentic user management)
  function loadAccounts() {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.users)) {
          return parsed;
        }
      }
    } catch (e) {}

    const initial = {
      users: [],
      currentUserId: null,
    };
    try {
      localStorage.setItem(AUTH_KEY, JSON.stringify(initial));
    } catch (e) {}
    return initial;
  }

  function saveAccounts(authData) {
    try {
      localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
    } catch (e) {}
  }

  function defaultState() {
    const auth = loadAccounts();
    const currUser = auth.users.find(u => u.id === auth.currentUserId) || null;

    return {
      activeTab: 'home',
      theme: 'dark', // Sleek modern dark theme default
      auth: auth,
      showAuthModal: false,
      authModalTab: 'login', // 'login', 'register', 'forgot', 'otp', 'newpass', or 'profile'
      authError: '',
      authSuccess: '',
      // Forgot Password State
      forgotMobile: '',
      generatedOtp: '',
      smsToast: '', // Simulated SMS delivery banner
      prefs: {
        name: currUser ? currUser.name : 'JEE Aspirant',
        examTarget: currUser ? currUser.targetExam : 'JEE Advanced',
        dailyTarget: 25,
      },
      goals: [
        { id: 'g1', text: 'Solve 15 Kinematics & Laws of Motion questions', done: true, date: getTodayStr() },
        { id: 'g2', text: 'Revise Chemical Bonding VSEPR & MOT notes', done: false, date: getTodayStr() },
        { id: 'g3', text: 'Practice 10 Definite Integrals King Property problems', done: false, date: getTodayStr() },
      ],
      completedChapters: {
        'p11-1': Date.now() - 86400000 * 3,
        'p11-2': Date.now() - 86400000 * 2,
        'c11-1': Date.now() - 86400000 * 4,
        'm11-1': Date.now() - 86400000 * 1,
      },
      attempts: [
        { id: 'a1', ts: Date.now() - 86400000 * 4, subject: 'Physics', chapterId: 'p11-2', attempted: 12, correct: 9, source: 'practice' },
        { id: 'a2', ts: Date.now() - 86400000 * 3, subject: 'Chemistry', chapterId: 'c11-4', attempted: 15, correct: 11, source: 'practice' },
        { id: 'a3', ts: Date.now() - 86400000 * 2, subject: 'Mathematics', chapterId: 'm12-5', attempted: 10, correct: 8, source: 'generator' },
        { id: 'a4', ts: Date.now() - 86400000 * 1, subject: 'Physics', chapterId: 'p12-1', attempted: 14, correct: 12, source: 'practice' },
        { id: 'a5', ts: Date.now(), subject: 'Mathematics', chapterId: 'm12-1', attempted: 8, correct: 7, source: 'generator' },
      ],
      bookmarks: [
        {
          id: 'bm-1',
          question: CURATED_QUESTIONS[0],
          notes: 'Review formula R = 4H cot θ for quick shortcut solving.',
          savedAt: Date.now() - 86400000 * 2,
        },
      ],
      mockTest: null,
      currentGeneratedQuestion: null,
      selectedAnswer: null,
      hasSubmittedAnswer: false,
    };
  }

  function getTodayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  let state = (function loadInitialState() {
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      const raw = localStorage.getItem(STORAGE_KEY);
      const s = raw ? JSON.parse(raw) : defaultState();
      s.auth = loadAccounts();
      if (savedTheme) s.theme = savedTheme;
      return s;
    } catch (e) {
      return defaultState();
    }
  })();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      localStorage.setItem(THEME_KEY, state.theme);
      if (state.auth) saveAccounts(state.auth);
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }

  function getCurrentUser() {
    if (!state.auth || !state.auth.currentUserId) return null;
    return state.auth.users.find(u => u.id === state.auth.currentUserId) || null;
  }

  // --- 5. THEME MANAGER ---
  function applyTheme(theme) {
    state.theme = theme;
    saveState();
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  function toggleTheme() {
    const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    renderApp();
  }

  // --- 6. STATS & ANALYTICS ---
  function getStats() {
    const att = state.attempts || [];
    const totalAttempted = att.reduce((acc, x) => acc + (x.attempted || 0), 0);
    const totalCorrect = att.reduce((acc, x) => acc + (x.correct || 0), 0);
    const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
    const chaptersDone = Object.keys(state.completedChapters || {}).length;

    const activeDates = new Set(att.filter(a => a.attempted > 0).map(a => new Date(a.ts).toDateString()));
    const today = new Date();
    let curr = new Date(today);
    let streak = 0;
    if (!activeDates.has(curr.toDateString())) {
      curr.setDate(curr.getDate() - 1);
    }
    while (activeDates.has(curr.toDateString())) {
      streak++;
      curr.setDate(curr.getDate() - 1);
    }

    const todayStr = new Date().toDateString();
    const todayCount = att.filter(a => new Date(a.ts).toDateString() === todayStr).reduce((acc, x) => acc + x.attempted, 0);

    return { totalAttempted, totalCorrect, accuracy, chaptersDone, streak, todayCount };
  }

  function getWeeklyChartData() {
    const days = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toDateString();
      const label = d.toLocaleDateString('en-US', { weekday: 'short' });

      const dayAttempts = (state.attempts || []).filter(a => new Date(a.ts).toDateString() === dateStr);
      const attempted = dayAttempts.reduce((s, a) => s + a.attempted, 0);
      const correct = dayAttempts.reduce((s, a) => s + a.correct, 0);
      days.push({ label, dateStr, attempted, correct });
    }
    return days;
  }

  // --- 7. ACTIONS & TEST CONTINUATION ENGINE ---
  function navigate(tab) {
    state.activeTab = tab;
    saveState();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderApp();
  }

  function addGoal(text) {
    if (!text.trim()) return;
    state.goals.push({
      id: 'g-' + Date.now(),
      text: text.trim(),
      done: false,
      date: getTodayStr(),
    });
    saveState();
    renderApp();
  }

  function toggleGoal(id) {
    const g = state.goals.find(x => x.id === id);
    if (g) {
      g.done = !g.done;
      saveState();
      renderApp();
    }
  }

  function deleteGoal(id) {
    state.goals = state.goals.filter(x => x.id !== id);
    saveState();
    renderApp();
  }

  function toggleChapterCompletion(chapterId) {
    if (state.completedChapters[chapterId]) {
      delete state.completedChapters[chapterId];
    } else {
      state.completedChapters[chapterId] = Date.now();
    }
    saveState();
    renderApp();
  }

  function logPracticeAttempt(subject, chapterId, attempted, correct) {
    state.attempts.push({
      id: 'att-' + Date.now(),
      ts: Date.now(),
      subject,
      chapterId,
      attempted: parseInt(attempted, 10),
      correct: parseInt(correct, 10),
      source: 'manual',
    });
    saveState();
    renderApp();
  }

  function toggleBookmark(question, notes = '') {
    const idx = state.bookmarks.findIndex(b => b.question.id === question.id);
    if (idx >= 0) {
      state.bookmarks.splice(idx, 1);
    } else {
      state.bookmarks.push({
        id: 'bm-' + Date.now(),
        question,
        notes: notes || 'Bookmarked for JEE revision',
        savedAt: Date.now(),
      });
    }
    saveState();
    renderApp();
  }

  function isBookmarked(questionId) {
    return state.bookmarks.some(b => b.question.id === questionId);
  }

  function formatSeconds(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  // Calculate remaining seconds based on absolute endTime
  function getMockRemainingSeconds() {
    if (!state.mockTest || !state.mockTest.active || state.mockTest.completed) return 0;
    const now = Date.now();
    return Math.max(0, Math.floor((state.mockTest.endTime - now) / 1000));
  }

  // Start new Mock Test with persistent absolute endTime
  function startMockTest(questionCount = 10) {
    const pool = [...CURATED_QUESTIONS];
    while (pool.length < questionCount) {
      pool.push(generateDynamicQuestion());
    }
    const shuffled = pool.sort(() => 0.5 - Math.random()).slice(0, questionCount);

    const durationSeconds = questionCount * 120; // 2 minutes per question
    const now = Date.now();

    state.mockTest = {
      active: true,
      questions: shuffled,
      currentIndex: 0,
      userAnswers: {},
      markedForReview: {},
      startTime: now,
      endTime: now + durationSeconds * 1000,
      durationSeconds: durationSeconds,
      completed: false,
      result: null,
      userId: state.auth.currentUserId || 'guest',
    };

    saveState();
    renderApp();
  }

  // Global Mock Timer Heartbeat: runs constantly across all tabs and actions
  let globalTimerInterval = null;
  function initMockHeartbeat() {
    if (globalTimerInterval) clearInterval(globalTimerInterval);
    globalTimerInterval = setInterval(() => {
      if (!state.mockTest || !state.mockTest.active || state.mockTest.completed) return;

      const remaining = getMockRemainingSeconds();

      const timerEl = document.getElementById('mock-timer-display');
      if (timerEl) {
        timerEl.textContent = formatSeconds(remaining);
      }

      const globalTimerEl = document.getElementById('global-timer-display');
      if (globalTimerEl) {
        globalTimerEl.textContent = formatSeconds(remaining);
      }

      if (remaining <= 0) {
        submitMockTest(true);
      }
    }, 1000);
  }

  function submitMockTest(autoSubmit = false) {
    if (!state.mockTest || !state.mockTest.active) return;
    const test = state.mockTest;
    let score = 0;
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    test.questions.forEach((q, i) => {
      const userAns = test.userAnswers[i];
      if (userAns === undefined || userAns === null) {
        unattempted++;
      } else if (userAns === q.correctIndex) {
        correct++;
        score += 4;
      } else {
        incorrect++;
        score -= 1;
      }
    });

    const totalQuestions = test.questions.length;
    const maxScore = totalQuestions * 4;

    test.completed = true;
    test.result = {
      score,
      maxScore,
      correct,
      incorrect,
      unattempted,
      accuracy: (correct + incorrect) > 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0,
      autoSubmitted: autoSubmit,
    };

    state.attempts.push({
      id: 'att-mock-' + Date.now(),
      ts: Date.now(),
      subject: 'Mock Exam',
      chapterId: 'mixed',
      attempted: correct + incorrect,
      correct: correct,
      source: 'mock',
    });

    saveState();
    if (autoSubmit) {
      alert("Time's up! Your mock exam has been automatically evaluated and submitted.");
    }
    navigate('mockTest');
  }

  // --- AUTHENTICATION & FORGOT PASSWORD ACTIONS ---
  function openAuthModal(tab = 'login') {
    state.showAuthModal = true;
    state.authModalTab = tab;
    state.authError = '';
    state.authSuccess = '';
    state.smsToast = '';
    renderApp();
  }

  function closeAuthModal() {
    state.showAuthModal = false;
    state.authError = '';
    state.authSuccess = '';
    state.smsToast = '';
    renderApp();
  }

  // Clean 10-digit mobile number helper
  function normalizeMobile(m) {
    if (!m) return '';
    return m.replace(/\D/g, '').slice(-10);
  }

  // Login using Mobile Number OR Email + Password
  function loginUser(identifier, password) {
    const cleanId = identifier.trim().toLowerCase();
    const cleanPhone = normalizeMobile(identifier);

    const user = state.auth.users.find(u => {
      const emailMatch = u.email && u.email.toLowerCase() === cleanId;
      const phoneMatch = cleanPhone && u.mobile && normalizeMobile(u.mobile) === cleanPhone;
      return emailMatch || phoneMatch;
    });

    if (!user) {
      state.authError = 'No registered account found with this Mobile Number or Email. Please create an account first.';
      renderApp();
      return false;
    }

    if (user.password !== password) {
      state.authError = 'Incorrect password. Click "Forgot Password?" below if you need to reset it.';
      renderApp();
      return false;
    }

    // Success: Login user without disturbing active test!
    state.auth.currentUserId = user.id;
    state.prefs.name = user.name;
    state.prefs.examTarget = user.targetExam || 'JEE Advanced';
    state.authError = '';
    state.authSuccess = `Welcome back, ${user.name}!`;
    saveAccounts(state.auth);
    saveState();

    setTimeout(() => {
      closeAuthModal();
    }, 600);
    return true;
  }

  // Register New User with Mobile Number, Name, Email, Password
  function registerUser(name, mobile, email, password, targetExam, targetYear) {
    const cleanName = name.trim();
    const cleanMobile = normalizeMobile(mobile);
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName) {
      state.authError = 'Please enter your full name.';
      renderApp();
      return false;
    }

    if (!cleanMobile || cleanMobile.length !== 10) {
      state.authError = 'Please enter a valid 10-digit mobile number.';
      renderApp();
      return false;
    }

    if (!cleanEmail || !cleanEmail.includes('@')) {
      state.authError = 'Please enter a valid email address.';
      renderApp();
      return false;
    }

    if (!password || password.length < 4) {
      state.authError = 'Password must be at least 4 characters long.';
      renderApp();
      return false;
    }

    // Check if mobile or email is already registered
    const mobileExists = state.auth.users.some(u => u.mobile && normalizeMobile(u.mobile) === cleanMobile);
    if (mobileExists) {
      state.authError = `Mobile number +91-${cleanMobile} is already registered. Please Sign In or use Forgot Password.`;
      renderApp();
      return false;
    }

    const emailExists = state.auth.users.some(u => u.email && u.email.toLowerCase() === cleanEmail);
    if (emailExists) {
      state.authError = 'Email address is already registered. Please Sign In.';
      renderApp();
      return false;
    }

    const newUser = {
      id: 'u-' + Date.now(),
      name: cleanName,
      mobile: cleanMobile,
      email: cleanEmail,
      password: password,
      targetExam: targetExam || 'JEE Advanced',
      targetYear: targetYear || '2026',
      avatar: ['👨‍🎓', '👩‍🎓', '🚀', '⚛️', '🎯'][Math.floor(Math.random() * 5)],
      createdAt: Date.now(),
    };

    state.auth.users.push(newUser);
    state.auth.currentUserId = newUser.id;
    state.prefs.name = newUser.name;
    state.prefs.examTarget = newUser.targetExam;
    state.authError = '';
    state.authSuccess = `Account registered successfully! Welcome, ${newUser.name}.`;

    saveAccounts(state.auth);
    saveState();

    setTimeout(() => {
      closeAuthModal();
    }, 700);
    return true;
  }

  // --- FORGOT PASSWORD WORKFLOW (MOBILE NUMBER BASED) ---

  // Step 1: Request OTP by mobile number
  function requestPasswordResetOtp(mobile) {
    const cleanPhone = normalizeMobile(mobile);
    if (!cleanPhone || cleanPhone.length !== 10) {
      state.authError = 'Please enter a valid 10-digit registered mobile number.';
      renderApp();
      return false;
    }

    const user = state.auth.users.find(u => u.mobile && normalizeMobile(u.mobile) === cleanPhone);
    if (!user) {
      state.authError = `No account found with mobile number +91-${cleanPhone}. Please verify or create an account.`;
      renderApp();
      return false;
    }

    // Generate 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    state.forgotMobile = cleanPhone;
    state.generatedOtp = otp;
    state.authError = '';
    state.authModalTab = 'otp';
    state.smsToast = `📩 [SMS Notification] Your OTP to reset password for +91-${cleanPhone} is: ${otp}`;
    state.authSuccess = `OTP sent to +91-${cleanPhone}. Check the SMS notification banner above!`;

    saveState();
    renderApp();
    return true;
  }

  // Step 2: Verify OTP
  function verifyPasswordResetOtp(enteredOtp) {
    if (!enteredOtp || enteredOtp.trim() !== state.generatedOtp) {
      state.authError = 'Invalid OTP. Please check the SMS banner and enter the exact 4 digits.';
      renderApp();
      return false;
    }

    state.authError = '';
    state.authSuccess = 'OTP verified successfully! Please enter your new password.';
    state.authModalTab = 'newpass';
    saveState();
    renderApp();
    return true;
  }

  // Step 3: Update Password
  function updateNewPassword(newPassword, confirmPassword) {
    if (!newPassword || newPassword.length < 4) {
      state.authError = 'Password must be at least 4 characters long.';
      renderApp();
      return false;
    }

    if (newPassword !== confirmPassword) {
      state.authError = 'Passwords do not match. Please re-enter carefully.';
      renderApp();
      return false;
    }

    const user = state.auth.users.find(u => u.mobile && normalizeMobile(u.mobile) === state.forgotMobile);
    if (!user) {
      state.authError = 'User account not found. Please restart the reset process.';
      renderApp();
      return false;
    }

    user.password = newPassword;
    saveAccounts(state.auth);

    state.authError = '';
    state.authSuccess = 'Password updated successfully! Please sign in with your new password.';
    state.authModalTab = 'login';
    state.smsToast = '';
    state.generatedOtp = '';
    state.forgotMobile = '';

    saveState();
    renderApp();
    return true;
  }

  function logoutUser() {
    state.auth.currentUserId = null;
    state.prefs.name = 'Guest Aspirant';
    state.authSuccess = 'Signed out successfully.';
    saveAccounts(state.auth);
    saveState();
    setTimeout(() => {
      closeAuthModal();
    }, 500);
  }

  // --- 8. ICONS (Clean Inline SVGs) ---
  const ICONS = {
    sparkles: `<svg class="w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`,
    sun: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`,
    moon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`,
    home: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
    dashboard: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>`,
    generator: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
    practice: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`,
    materials: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
    mockTest: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    saved: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>`,
    check: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`,
    cross: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>`,
    target: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    flame: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343a7.975 7.975 0 012.343 5.657 8 8 0 01-2.342 5.657z"/></svg>`,
    trash: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
    plus: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`,
    cap: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5"/></svg>`,
    user: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
    phone: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>`,
  };

  // --- 9. VIEW RENDERERS ---

  // Sidebar Component with User Account Badge
  function renderSidebar() {
    const navItems = [
      { id: 'home', label: 'Home', icon: ICONS.home },
      { id: 'dashboard', label: 'Dashboard', icon: ICONS.dashboard },
      { id: 'generator', label: 'AI Question Generator', icon: ICONS.generator, highlight: true },
      { id: 'practice', label: 'Practice Zone', icon: ICONS.practice },
      { id: 'materials', label: 'Study Materials', icon: ICONS.materials },
      { id: 'mockTest', label: 'Mock Tests', icon: ICONS.mockTest },
      { id: 'saved', label: 'Saved Questions', icon: ICONS.saved },
    ];

    const user = getCurrentUser();

    return `
      <!-- Desktop Sidebar -->
      <aside class="hidden lg:flex lg:flex-col lg:w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 min-h-screen p-4 sticky top-0 transition-colors">
        <!-- Brand -->
        <div class="flex items-center justify-between mb-5 px-2">
          <div class="flex items-center gap-3 cursor-pointer" onclick="window.appNav('home')">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center shadow-md shadow-brand-500/20">
              ${ICONS.cap}
            </div>
            <div>
              <span class="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">JEE Prep AI</span>
              <span class="block text-[10px] uppercase font-bold tracking-wider text-brand-600 dark:text-brand-400">Main & Advanced</span>
            </div>
          </div>
        </div>

        <!-- User Profile Card in Sidebar -->
        <div class="mb-4 p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between gap-2">
          ${user ? `
            <div class="flex items-center gap-2.5 overflow-hidden cursor-pointer" onclick="window.openAuthModal('profile')">
              <span class="text-2xl">${user.avatar || '👨‍🎓'}</span>
              <div class="truncate">
                <div class="text-xs font-bold text-slate-900 dark:text-white truncate">${user.name}</div>
                <div class="text-[10px] text-brand-600 dark:text-brand-400 font-semibold">${user.targetExam}</div>
              </div>
            </div>
            <button
              onclick="window.openAuthModal('profile')"
              class="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-white dark:hover:bg-slate-700 transition"
              title="View Profile / Switch Account"
            >
              ${ICONS.user}
            </button>
          ` : `
            <div class="flex items-center gap-2 cursor-pointer" onclick="window.openAuthModal('login')">
              <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500">
                ${ICONS.user}
              </div>
              <div>
                <div class="text-xs font-bold text-slate-800 dark:text-slate-200">Guest User</div>
                <div class="text-[10px] text-brand-600 dark:text-brand-400 font-semibold">Sign in to save</div>
              </div>
            </div>
            <button
              onclick="window.openAuthModal('login')"
              class="px-2.5 py-1 rounded-lg bg-brand-600 text-white font-bold text-[11px] shadow-sm hover:bg-brand-700 transition"
            >
              Sign In
            </button>
          `}
        </div>

        <!-- Navigation Links -->
        <nav class="space-y-1 flex-1">
          ${navItems.map(item => {
            const active = state.activeTab === item.id;
            return `
              <button
                onclick="window.appNav('${item.id}')"
                class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  active
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                }"
              >
                ${item.icon}
                <span class="flex-1 text-left">${item.label}</span>
                ${item.highlight ? `<span class="px-1.5 py-0.5 text-[10px] rounded-full font-bold uppercase tracking-wider ${active ? 'bg-white/20 text-white' : 'bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300'}">AI</span>` : ''}
              </button>
            `;
          }).join('')}
        </nav>

        <!-- Theme Toggle & Auto-save Info -->
        <div class="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <button
            onclick="window.appToggleTheme()"
            class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold transition shadow-sm"
          >
            <span class="flex items-center gap-2">
              ${state.theme === 'dark' ? ICONS.moon : ICONS.sun}
              <span>${state.theme === 'dark' ? 'Dark Theme' : 'Light Theme'}</span>
            </span>
            <span class="text-xs px-2 py-0.5 rounded-md font-bold bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-300">
              ${state.theme === 'dark' ? 'ON' : 'OFF'}
            </span>
          </button>

          <div class="px-2 text-[11px] text-slate-400 dark:text-slate-500 flex items-center justify-between">
            <span>Tests & Answers saved</span>
            <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
        </div>
      </aside>

      <!-- Mobile Top Bar -->
      <header class="lg:hidden sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div class="flex items-center gap-2" onclick="window.appNav('home')">
          <div class="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
            ${ICONS.cap}
          </div>
          <span class="font-bold text-slate-900 dark:text-white">JEE Prep AI</span>
        </div>

        <div class="flex items-center gap-2">
          <!-- User Profile Button on Mobile -->
          <button
            onclick="window.openAuthModal(state.auth.currentUserId ? 'profile' : 'login')"
            class="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold"
          >
            ${user ? `<span class="text-base">${user.avatar || '👨‍🎓'}</span>` : ICONS.user}
          </button>

          <!-- Theme Toggle -->
          <button
            onclick="window.appToggleTheme()"
            class="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            title="Toggle theme"
          >
            ${state.theme === 'dark' ? ICONS.sun : ICONS.moon}
          </button>

          <!-- Navigation Select -->
          <select
            onchange="window.appNav(this.value)"
            class="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200"
          >
            ${navItems.map(i => `<option value="${i.id}" ${state.activeTab === i.id ? 'selected' : ''}>${i.label}</option>`).join('')}
          </select>
        </div>
      </header>
    `;
  }

  // Persistent Sticky Top Banner: Appears across ALL pages when a mock test is in progress
  function renderPersistentTestBanner() {
    if (!state.mockTest || !state.mockTest.active || state.mockTest.completed) return '';

    const remaining = getMockRemainingSeconds();
    const answeredCount = Object.keys(state.mockTest.userAnswers || {}).length;
    const totalCount = state.mockTest.questions.length;

    return `
      <div class="sticky top-0 z-50 bg-gradient-to-r from-amber-500 via-orange-500 to-brand-600 text-white px-4 py-2.5 shadow-lg flex items-center justify-between border-b border-amber-600/40">
        <div class="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <span>Mock Test In Progress:</span>
          <span class="px-2 py-0.5 rounded bg-black/25 font-mono text-xs font-extrabold" id="global-timer-display">
            ${formatSeconds(remaining)}
          </span>
          <span class="hidden md:inline text-amber-100 font-medium text-xs">
            (${answeredCount} of ${totalCount} answered)
          </span>
        </div>

        <div class="flex items-center gap-2">
          <button
            onclick="window.appNav('mockTest')"
            class="px-3.5 py-1 rounded-lg bg-white text-slate-900 font-extrabold text-xs shadow hover:bg-amber-50 transition flex items-center gap-1"
          >
            Resume Test &rarr;
          </button>
          <button
            onclick="if(confirm('Submit your mock test now?')) window.appSubmitMockTest()"
            class="px-2.5 py-1 rounded-lg bg-black/20 text-white font-semibold text-xs hover:bg-black/35 transition"
          >
            Submit
          </button>
        </div>
      </div>
    `;
  }

  // Auth Modal Dialog Component with Mobile Number Forgot Password Workflow
  function renderAuthModal() {
    if (!state.showAuthModal) return '';

    const tab = state.authModalTab || 'login';
    const user = getCurrentUser();

    return `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
        <div class="relative w-full max-w-md rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xl space-y-4">
          <!-- Close Button -->
          <button
            onclick="window.closeAuthModal()"
            class="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            ${ICONS.cross}
          </button>

          <!-- Modal Header -->
          <div class="text-center space-y-1">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-500 text-white flex items-center justify-center mx-auto shadow-md">
              ${ICONS.cap}
            </div>
            <h2 class="text-xl font-black text-slate-900 dark:text-white">
              ${
                tab === 'profile'
                  ? 'Your JEE Profile'
                  : tab === 'login'
                  ? 'Sign In to JEE Prep'
                  : tab === 'register'
                  ? 'Create New Account'
                  : tab === 'forgot'
                  ? 'Reset Password'
                  : tab === 'otp'
                  ? 'Verify Mobile OTP'
                  : 'Set New Password'
              }
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              ${
                tab === 'forgot'
                  ? 'Enter your registered mobile number to receive an instant OTP'
                  : tab === 'otp'
                  ? `Enter the 4-digit OTP sent to +91-${state.forgotMobile}`
                  : tab === 'newpass'
                  ? 'Choose a secure new password for your account'
                  : 'Manage your JEE practice, tests, bookmarks and streak'
              }
            </p>
          </div>

          <!-- SMS Notification Banner (Simulated live SMS for instant zero-dependency testing) -->
          ${state.smsToast ? `
            <div class="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-700 text-xs text-amber-900 dark:text-amber-200 font-bold shadow-sm animate-pulse flex items-start gap-2">
              <span class="text-base leading-none">📱</span>
              <div class="flex-1">${state.smsToast}</div>
            </div>
          ` : ''}

          <!-- Notification / Error Messages -->
          ${state.authError ? `
            <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-700 dark:text-rose-300 font-semibold flex items-center gap-2">
              <span>⚠️</span> <span>${state.authError}</span>
            </div>
          ` : ''}

          ${state.authSuccess ? `
            <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/60 text-xs text-emerald-700 dark:text-emerald-300 font-semibold flex items-center gap-2">
              <span>✓</span> <span>${state.authSuccess}</span>
            </div>
          ` : ''}

          <!-- In-progress Test Reminder Notice -->
          ${state.mockTest && state.mockTest.active && !state.mockTest.completed ? `
            <div class="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-[11px] text-indigo-800 dark:text-indigo-200 font-medium">
              💡 <strong>Test Safe:</strong> Your mock test in progress remains active with answers and remaining timer intact.
            </div>
          ` : ''}

          <!-- Tabs Switcher (Only on login or register) -->
          ${(tab === 'login' || tab === 'register') ? `
            <div class="flex rounded-xl p-1 bg-slate-100 dark:bg-slate-800 text-xs font-bold">
              <button
                type="button"
                onclick="window.openAuthModal('login')"
                class="flex-1 py-2 rounded-lg transition ${tab === 'login' ? 'bg-white dark:bg-slate-700 text-brand-600 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}"
              >
                Sign In
              </button>
              <button
                type="button"
                onclick="window.openAuthModal('register')"
                class="flex-1 py-2 rounded-lg transition ${tab === 'register' ? 'bg-white dark:bg-slate-700 text-brand-600 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}"
              >
                Create Account
              </button>
            </div>
          ` : ''}

          <!-- TAB 1: LOGIN FORM -->
          ${tab === 'login' ? `
            <form onsubmit="window.handleLoginSubmit(event)" class="space-y-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Mobile Number or Email</label>
                <input
                  id="auth-login-identifier"
                  type="text"
                  required
                  placeholder="e.g. 9876543210 or name@example.com"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 font-medium"
                />
              </div>

              <div>
                <div class="flex items-center justify-between mb-1">
                  <label class="block text-xs font-bold text-slate-700 dark:text-slate-300">Password</label>
                  <button
                    type="button"
                    onclick="window.openAuthModal('forgot')"
                    class="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                <input
                  id="auth-login-password"
                  type="password"
                  required
                  placeholder="Enter your password"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 font-medium"
                />
              </div>

              <button
                type="submit"
                class="w-full py-2.5 rounded-xl font-bold text-sm bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-600/30 transition"
              >
                Sign In
              </button>

              <div class="text-center pt-2">
                <span class="text-xs text-slate-500 dark:text-slate-400">Don't have an account?</span>
                <button
                  type="button"
                  onclick="window.openAuthModal('register')"
                  class="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline ml-1"
                >
                  Create one now
                </button>
              </div>
            </form>
          ` : ''}

          <!-- TAB 2: REGISTER FORM -->
          ${tab === 'register' ? `
            <form onsubmit="window.handleRegisterSubmit(event)" class="space-y-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                <input
                  id="auth-reg-name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  class="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 font-medium"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Mobile Number (10 Digits)</label>
                <div class="flex">
                  <span class="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300">
                    +91
                  </span>
                  <input
                    id="auth-reg-mobile"
                    type="tel"
                    required
                    maxlength="10"
                    placeholder="9876543210"
                    class="w-full px-3.5 py-2 rounded-r-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                <input
                  id="auth-reg-email"
                  type="email"
                  required
                  placeholder="e.g. rahul@example.com"
                  class="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 font-medium"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Password</label>
                <input
                  id="auth-reg-password"
                  type="password"
                  required
                  placeholder="At least 4 characters"
                  class="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 font-medium"
                />
              </div>

              <div class="grid grid-cols-2 gap-2">
                <div>
                  <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Target Exam</label>
                  <select
                    id="auth-reg-exam"
                    class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-900 dark:text-white"
                  >
                    <option value="JEE Advanced">JEE Advanced</option>
                    <option value="JEE Main">JEE Main</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Target Year</label>
                  <select
                    id="auth-reg-year"
                    class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-900 dark:text-white"
                  >
                    <option value="2026">JEE 2026</option>
                    <option value="2027">JEE 2027</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                class="w-full py-2.5 rounded-xl font-bold text-sm bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-600/30 transition pt-2"
              >
                Create Account & Save Progress
              </button>
            </form>
          ` : ''}

          <!-- TAB: FORGOT PASSWORD (STEP 1: ENTER MOBILE) -->
          ${tab === 'forgot' ? `
            <form onsubmit="window.handleForgotMobileSubmit(event)" class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Registered Mobile Number</label>
                <div class="flex">
                  <span class="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300">
                    +91
                  </span>
                  <input
                    id="auth-forgot-mobile"
                    type="tel"
                    required
                    maxlength="10"
                    placeholder="Enter 10-digit number"
                    class="w-full px-3.5 py-2.5 rounded-r-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                class="w-full py-2.5 rounded-xl font-bold text-sm bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-600/30 transition flex items-center justify-center gap-2"
              >
                ${ICONS.phone} Send Reset OTP
              </button>

              <div class="text-center pt-1">
                <button
                  type="button"
                  onclick="window.openAuthModal('login')"
                  class="text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                >
                  &larr; Back to Sign In
                </button>
              </div>
            </form>
          ` : ''}

          <!-- TAB: VERIFY OTP (STEP 2: ENTER OTP) -->
          ${tab === 'otp' ? `
            <form onsubmit="window.handleVerifyOtpSubmit(event)" class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Enter 4-Digit OTP</label>
                <input
                  id="auth-otp-input"
                  type="text"
                  required
                  maxlength="4"
                  placeholder="e.g. 5831"
                  class="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-center text-xl font-mono tracking-widest text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 font-bold"
                />
              </div>

              <button
                type="submit"
                class="w-full py-2.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition"
              >
                Verify OTP & Continue
              </button>

              <div class="flex items-center justify-between text-xs pt-1">
                <button
                  type="button"
                  onclick="window.requestPasswordResetOtp(state.forgotMobile)"
                  class="text-brand-600 dark:text-brand-400 font-bold hover:underline"
                >
                  Resend OTP
                </button>
                <button
                  type="button"
                  onclick="window.openAuthModal('forgot')"
                  class="text-slate-400 hover:text-slate-600"
                >
                  Change Number
                </button>
              </div>
            </form>
          ` : ''}

          <!-- TAB: SET NEW PASSWORD (STEP 3) -->
          ${tab === 'newpass' ? `
            <form onsubmit="window.handleNewPasswordSubmit(event)" class="space-y-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">New Password</label>
                <input
                  id="auth-new-password"
                  type="password"
                  required
                  placeholder="Minimum 4 characters"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 font-medium"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Confirm New Password</label>
                <input
                  id="auth-confirm-password"
                  type="password"
                  required
                  placeholder="Re-enter new password"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 font-medium"
                />
              </div>

              <button
                type="submit"
                class="w-full py-2.5 rounded-xl font-bold text-sm bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-600/30 transition"
              >
                Reset & Update Password
              </button>
            </form>
          ` : ''}

          <!-- TAB: LOGGED IN PROFILE VIEW -->
          ${tab === 'profile' && user ? `
            <div class="space-y-4">
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center space-y-2">
                <div class="text-4xl">${user.avatar || '👨‍🎓'}</div>
                <h3 class="font-extrabold text-base text-slate-900 dark:text-white">${user.name}</h3>
                <div class="text-xs text-slate-500 font-mono">📱 +91-${user.mobile || 'Not set'}</div>
                <div class="text-xs text-slate-500 font-mono">✉️ ${user.email}</div>
                <div class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-brand-100 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 mt-1">
                  Target: ${user.targetExam} (${user.targetYear || '2026'})
                </div>
              </div>

              <div class="flex gap-2">
                <button
                  onclick="window.logoutCurrentUser()"
                  class="flex-1 py-2 rounded-xl font-bold text-xs border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition"
                >
                  Sign Out
                </button>
                <button
                  onclick="window.openAuthModal('login')"
                  class="flex-1 py-2 rounded-xl font-bold text-xs border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Switch Account
                </button>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // View: HOME
  function renderHomeView() {
    const stats = getStats();
    return `
      <div class="space-y-8 max-w-5xl mx-auto">
        <!-- Hero Banner with Theme-responsive Gradient -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-indigo-600 to-purple-700 text-white p-6 sm:p-10 shadow-xl shadow-brand-600/15">
          <div class="relative z-10 max-w-2xl space-y-4">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur border border-white/20 text-white">
              ${ICONS.sparkles} 100% Free AI-Powered JEE Prep Engine
            </span>
            <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Master JEE with Instant AI Question Generation
            </h1>
            <p class="text-indigo-100 text-sm sm:text-base leading-relaxed">
              Physics, Chemistry & Mathematics for JEE Main & Advanced. Generate custom questions with step-by-step solutions, practice topic-wise, view formula sheets, and track your daily streak.
            </p>
            <div class="flex flex-wrap gap-3 pt-2">
              <button
                onclick="window.appNav('generator')"
                class="px-5 py-2.5 rounded-xl font-bold text-sm bg-white text-brand-700 hover:bg-indigo-50 transition shadow-lg shadow-black/10 flex items-center gap-2"
              >
                ${ICONS.generator} Launch Question Generator
              </button>
              <button
                onclick="window.appNav('dashboard')"
                class="px-5 py-2.5 rounded-xl font-bold text-sm bg-white/15 border border-white/30 text-white hover:bg-white/20 transition backdrop-blur"
              >
                View Dashboard
              </button>
            </div>
          </div>
          <div class="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          <div class="absolute right-20 top-5 w-40 h-40 rounded-full bg-purple-500/20 blur-xl pointer-events-none"></div>
        </div>

        <!-- Quick Stats Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div class="text-brand-600 dark:text-brand-400 mb-2">${ICONS.target}</div>
            <div class="text-2xl font-black text-slate-900 dark:text-white">${stats.totalAttempted}</div>
            <div class="text-xs font-medium text-slate-500 dark:text-slate-400">Questions Solved</div>
          </div>

          <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div class="text-emerald-600 dark:text-emerald-400 mb-2">${ICONS.check}</div>
            <div class="text-2xl font-black text-slate-900 dark:text-white">${stats.accuracy}%</div>
            <div class="text-xs font-medium text-slate-500 dark:text-slate-400">Overall Accuracy</div>
          </div>

          <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div class="text-amber-500 mb-2">${ICONS.materials}</div>
            <div class="text-2xl font-black text-slate-900 dark:text-white">${stats.chaptersDone} / ${CHAPTERS.length}</div>
            <div class="text-xs font-medium text-slate-500 dark:text-slate-400">Chapters Completed</div>
          </div>

          <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div class="text-rose-500 mb-2">${ICONS.flame}</div>
            <div class="text-2xl font-black text-slate-900 dark:text-white">${stats.streak} Days</div>
            <div class="text-xs font-medium text-slate-500 dark:text-slate-400">Active Streak</div>
          </div>
        </div>

        <!-- Interactive Core Features Hub -->
        <div>
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Prepare by Category</h2>
            <span class="text-xs font-semibold text-brand-600 dark:text-brand-400 cursor-pointer" onclick="window.appNav('generator')">Explore All Modules &rarr;</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              onclick="window.appNav('generator')"
              class="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-500 dark:hover:border-brand-500 transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <div class="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3">
                ${ICONS.generator}
              </div>
              <h3 class="font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-600 transition">AI Question Generator</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Generate fresh problems on any chapter with step-by-step solutions and JEE Main / Advanced difficulty.
              </p>
              <div class="mt-4 flex items-center gap-2 text-xs font-semibold text-brand-600 dark:text-brand-400">
                <span>Start Generating</span> &rarr;
              </div>
            </div>

            <div
              onclick="window.appNav('practice')"
              class="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                ${ICONS.practice}
              </div>
              <h3 class="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 transition">Practice Zone</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Topic-wise curated questions, instant correctness checks, bookmarking, and timer modes.
              </p>
              <div class="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span>Solve Questions</span> &rarr;
              </div>
            </div>

            <div
              onclick="window.appNav('mockTest')"
              class="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-purple-500 dark:hover:border-purple-500 transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <div class="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                ${ICONS.mockTest}
              </div>
              <h3 class="font-bold text-base text-slate-900 dark:text-white group-hover:text-purple-600 transition">Timed Mock Test</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Simulated exam with negative marking (+4 / -1), question palette, and detailed performance breakdown.
              </p>
              <div class="mt-4 flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400">
                <span>Take a Test</span> &rarr;
              </div>
            </div>
          </div>
        </div>

        <!-- Subjects Breakdown Bar -->
        <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <h3 class="font-bold text-base text-slate-900 dark:text-white mb-4">Complete Syllabus Coverage</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            ${SUBJECTS.map(s => {
              const chaps = CHAPTERS.filter(c => c.subject === s);
              const done = chaps.filter(c => state.completedChapters[c.id]).length;
              const pct = Math.round((done / chaps.length) * 100);
              const t = SUBJECT_THEME[s];
              return `
                <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-800/40">
                  <div class="flex items-center justify-between mb-2">
                    <span class="font-bold text-sm text-slate-800 dark:text-slate-200">${s}</span>
                    <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">${done}/${chaps.length}</span>
                  </div>
                  <div class="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div class="h-full rounded-full ${t.bar}" style="width: ${pct}%"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // View: AI QUESTION GENERATOR
  function renderGeneratorView() {
    const q = state.currentGeneratedQuestion || CURATED_QUESTIONS[0];
    const userAns = state.selectedAnswer;
    const submitted = state.hasSubmittedAnswer;
    const isSaved = isBookmarked(q.id);

    return `
      <div class="max-w-4xl mx-auto space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 class="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              ${ICONS.generator} AI Question Generator
            </h1>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              Generate custom JEE Main & Advanced questions dynamically with step-by-step mathematical solutions.
            </p>
          </div>
        </div>

        <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <form id="gen-form" onsubmit="window.handleGenerateSubmit(event)" class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">Subject</label>
              <select
                id="gen-subject"
                onchange="window.updateChapterDropdown()"
                class="w-full px-3 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-brand-500 font-medium"
              >
                ${SUBJECTS.map(s => `<option value="${s}">${s}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">Class Level</label>
              <select
                id="gen-class"
                onchange="window.updateChapterDropdown()"
                class="w-full px-3 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-brand-500 font-medium"
              >
                <option value="">All (Class 11 & 12)</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">Difficulty Level</label>
              <select
                id="gen-difficulty"
                class="w-full px-3 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-brand-500 font-medium"
              >
                <option value="JEE Main">JEE Main Standard</option>
                <option value="JEE Advanced">JEE Advanced Challenging</option>
                <option value="Easy">Foundation / Easy</option>
              </select>
            </div>

            <div class="sm:col-span-2">
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">Chapter</label>
              <select
                id="gen-chapter"
                class="w-full px-3 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-brand-500 font-medium"
              >
                ${getChapters('Physics', '').map(c => `<option value="${c.name}">Class ${c.class}: ${c.name}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">Focus Concept (Optional)</label>
              <input
                id="gen-prompt"
                type="text"
                placeholder="e.g. Rolling motion, King rule"
                class="w-full px-3 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-brand-500 font-medium"
              />
            </div>

            <div class="sm:col-span-3 pt-2 flex justify-end">
              <button
                type="submit"
                class="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-sm bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-600/30 transition flex items-center justify-center gap-2"
              >
                ${ICONS.sparkles} Generate New Question
              </button>
            </div>
          </form>
        </div>

        <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${SUBJECT_THEME[q.subject]?.badge || 'bg-slate-100 text-slate-700'}">
                ${q.subject}
              </span>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                ${q.chapter}
              </span>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">
                ${q.difficulty}
              </span>
            </div>

            <button
              onclick="window.handleBookmarkToggle()"
              class="px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition ${
                isSaved
                  ? 'border-amber-400 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300'
                  : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }"
            >
              ${ICONS.saved} <span>${isSaved ? 'Bookmarked' : 'Save Question'}</span>
            </button>
          </div>

          <div class="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed math-formula">
            ${q.question}
          </div>

          <div class="space-y-2.5">
            ${q.options.map((opt, i) => {
              const letter = String.fromCharCode(65 + i);
              let stateClasses = 'border-slate-200 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-500 bg-slate-50/50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200';

              if (userAns === i && !submitted) {
                stateClasses = 'border-brand-600 bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 ring-2 ring-brand-500/30';
              }

              if (submitted) {
                if (i === q.correctIndex) {
                  stateClasses = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 font-bold';
                } else if (userAns === i && userAns !== q.correctIndex) {
                  stateClasses = 'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200';
                } else {
                  stateClasses = 'opacity-60 border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20';
                }
              }

              return `
                <div
                  onclick="${submitted ? '' : `window.selectOption(${i})`}"
                  class="flex items-start gap-3 p-3.5 rounded-xl border text-sm transition-all ${stateClasses} ${submitted ? '' : 'cursor-pointer'}"
                >
                  <span class="w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                    submitted && i === q.correctIndex
                      ? 'bg-emerald-500 text-white'
                      : submitted && userAns === i
                      ? 'bg-rose-500 text-white'
                      : userAns === i
                      ? 'bg-brand-600 text-white'
                      : 'bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300'
                  }">
                    ${letter}
                  </span>
                  <div class="flex-1 pt-0.5 math-formula font-medium">${opt}</div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="flex flex-wrap items-center justify-between gap-3 pt-3">
            <div class="text-xs text-slate-500 dark:text-slate-400">
              ${submitted
                ? (userAns === q.correctIndex
                    ? '<span class="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">' + ICONS.check + ' Correct! (+4 Marks)</span>'
                    : '<span class="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1.5">' + ICONS.cross + ' Incorrect (-1 Mark)</span>')
                : 'Select an option and click Submit Answer.'
              }
            </div>

            <div class="flex gap-2">
              ${!submitted ? `
                <button
                  onclick="window.submitCurrentAnswer()"
                  class="px-5 py-2 rounded-xl text-sm font-bold bg-brand-600 hover:bg-brand-700 text-white shadow-md transition disabled:opacity-50"
                  ${userAns === null ? 'disabled' : ''}
                >
                  Submit Answer
                </button>
              ` : `
                <button
                  onclick="window.generateNextQuestion()"
                  class="px-5 py-2 rounded-xl text-sm font-bold bg-brand-600 hover:bg-brand-700 text-white shadow-md transition flex items-center gap-2"
                >
                  ${ICONS.plus} Next Question
                </button>
              `}
            </div>
          </div>

          ${submitted ? `
            <div class="mt-6 p-5 rounded-2xl border border-brand-200 dark:border-brand-900/60 bg-brand-50/50 dark:bg-brand-950/30 space-y-3">
              <div class="flex items-center gap-2 text-sm font-bold text-brand-700 dark:text-brand-300">
                ${ICONS.sparkles} Step-by-Step Solution & Derivation
              </div>
              <pre class="text-xs sm:text-sm font-sans whitespace-pre-wrap text-slate-700 dark:text-slate-300 leading-relaxed">${q.solution}</pre>
              ${q.tip ? `
                <div class="mt-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-200 font-medium">
                  <strong>JEE Tip / Shortcut:</strong> ${q.tip}
                </div>
              ` : ''}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // View: PRACTICE ZONE
  function renderPracticeView() {
    return `
      <div class="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 class="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            ${ICONS.practice} Practice Zone
          </h1>
          <p class="text-sm text-slate-500 dark:text-slate-400">
            Work through curated JEE Main & Advanced questions chapter-wise with immediate feedback.
          </p>
        </div>

        <div class="space-y-4">
          ${CURATED_QUESTIONS.map((q, idx) => {
            const isSaved = isBookmarked(q.id);
            return `
              <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${SUBJECT_THEME[q.subject]?.badge}">
                      ${q.subject}
                    </span>
                    <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      ${q.chapter}
                    </span>
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      ${q.difficulty}
                    </span>
                  </div>
                  <button
                    onclick="window.toggleBookmarkById('${q.id}')"
                    class="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-amber-500 transition"
                    title="Bookmark"
                  >
                    ${isSaved ? `<span class="text-amber-500 font-bold">${ICONS.saved}</span>` : ICONS.saved}
                  </button>
                </div>

                <div class="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 math-formula">
                  ${idx + 1}. ${q.question}
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${q.options.map((opt, oIdx) => `
                    <div
                      onclick="window.checkPracticeAnswer('${q.id}', ${oIdx})"
                      id="opt-${q.id}-${oIdx}"
                      class="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-brand-500 cursor-pointer transition"
                    >
                      <span class="w-5 h-5 rounded-md bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center font-bold text-[10px]">
                        ${String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>${opt}</span>
                    </div>
                  `).join('')}
                </div>

                <div id="sol-box-${q.id}" class="hidden p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  <div class="font-bold text-brand-600 dark:text-brand-400">Detailed Solution:</div>
                  <div class="whitespace-pre-wrap">${q.solution}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // View: STUDY MATERIALS
  function renderMaterialsView() {
    return `
      <div class="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 class="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            ${ICONS.materials} Study Materials & Formula Sheets
          </h1>
          <p class="text-sm text-slate-500 dark:text-slate-400">
            High-yield formula cheat-sheets, core concepts, and shortcuts for Class 11 & 12 JEE syllabus.
          </p>
        </div>

        ${SUBJECTS.map(subject => {
          const notes = STUDY_NOTES[subject] || [];
          return `
            <div class="space-y-4">
              <h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span class="w-3 h-3 rounded-full ${SUBJECT_THEME[subject].bar}"></span>
                ${subject} Core Revision
              </h2>

              <div class="grid grid-cols-1 gap-4">
                ${notes.map(n => `
                  <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
                    <div class="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                      <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">Class ${n.class} · ${n.chapter}</span>
                        <h3 class="text-base font-bold text-slate-900 dark:text-white">${n.title}</h3>
                      </div>
                      <button
                        onclick="window.quickPracticeChapter('${n.chapter}')"
                        class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 hover:bg-brand-100 transition"
                      >
                        Generate Questions &rarr;
                      </button>
                    </div>

                    <div>
                      <div class="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 mb-2">Key Formulas</div>
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        ${n.formulas.map(f => `
                          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-800 dark:text-slate-200 font-semibold">
                            ${f}
                          </div>
                        `).join('')}
                      </div>
                    </div>

                    <div>
                      <div class="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 mb-2">High-Yield Points & Traps</div>
                      <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                        ${n.points.map(p => `
                          <li class="flex items-start gap-2">
                            <span class="text-brand-500 font-bold shrink-0">•</span>
                            <span>${p}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // View: MOCK TEST
  function renderMockTestView() {
    const test = state.mockTest;

    if (!test || !test.active) {
      return `
        <div class="max-w-2xl mx-auto space-y-6 text-center py-10">
          <div class="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto mb-2">
            ${ICONS.mockTest}
          </div>
          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            JEE Main Speed Mock Exam
          </h1>
          <p class="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Test yourself with 10 questions under real exam conditions. Marking scheme: <strong class="text-emerald-600">+4 for correct</strong>, <strong class="text-rose-500">-1 for incorrect</strong>.
          </p>

          <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-left text-xs space-y-2 max-w-md mx-auto">
            <div class="font-bold text-slate-800 dark:text-slate-200">Exam Instructions:</div>
            <div class="text-slate-500 dark:text-slate-400">• Total Duration: 20 minutes (2 mins/question)</div>
            <div class="text-slate-500 dark:text-slate-400">• Persistent Timer: You can explore other pages or sign in; your timer and answers remain safely preserved.</div>
            <div class="text-slate-500 dark:text-slate-400">• Auto-submission when timer hits zero.</div>
          </div>

          <button
            onclick="window.appStartMockTest()"
            class="px-8 py-3 rounded-xl font-bold text-sm bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/30 transition inline-flex items-center gap-2"
          >
            ${ICONS.sparkles} Start Test Now
          </button>
        </div>
      `;
    }

    if (test.completed) {
      const res = test.result;
      return `
        <div class="max-w-3xl mx-auto space-y-6">
          <div class="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-6">
            <div class="text-center space-y-2">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                Mock Test Completed!
              </span>
              <h2 class="text-3xl font-black text-slate-900 dark:text-white">
                Score: ${res.score} / ${res.maxScore}
              </h2>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                Attempted: ${res.correct + res.incorrect} · Accuracy: ${res.accuracy}%
              </p>
            </div>

            <div class="grid grid-cols-3 gap-3">
              <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center">
                <div class="text-xl font-black text-emerald-700 dark:text-emerald-300">${res.correct}</div>
                <div class="text-[11px] font-semibold text-emerald-600">Correct (+4 each)</div>
              </div>

              <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-center">
                <div class="text-xl font-black text-rose-700 dark:text-rose-300">${res.incorrect}</div>
                <div class="text-[11px] font-semibold text-rose-600">Wrong (-1 each)</div>
              </div>

              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-center">
                <div class="text-xl font-black text-slate-700 dark:text-slate-300">${res.unattempted}</div>
                <div class="text-[11px] font-semibold text-slate-500">Unattempted</div>
              </div>
            </div>

            <div class="pt-4 flex justify-center gap-3">
              <button
                onclick="window.appStartMockTest()"
                class="px-5 py-2.5 rounded-xl font-bold text-sm bg-brand-600 hover:bg-brand-700 text-white shadow-md transition"
              >
                Retake New Test
              </button>
              <button
                onclick="window.appNav('dashboard')"
                class="px-5 py-2.5 rounded-xl font-bold text-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // Active Mock Test View
    const currQ = test.questions[test.currentIndex];
    const userAns = test.userAnswers[test.currentIndex];
    const remaining = getMockRemainingSeconds();

    return `
      <div class="max-w-4xl mx-auto space-y-6">
        <div class="flex items-center justify-between p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <div>
            <div class="text-xs font-bold text-slate-400">JEE Mock Simulator</div>
            <div class="text-sm font-extrabold text-slate-800 dark:text-slate-200">
              Question ${test.currentIndex + 1} of ${test.questions.length}
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-300 font-mono font-bold text-sm">
              ⏱️ <span id="mock-timer-display">${formatSeconds(remaining)}</span>
            </div>

            <button
              onclick="if(confirm('Are you sure you want to submit the exam now?')) window.appSubmitMockTest()"
              class="px-4 py-1.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition"
            >
              Submit Test
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-6">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${SUBJECT_THEME[currQ.subject]?.badge}">
                ${currQ.subject}
              </span>
              <span class="text-xs text-slate-500">${currQ.chapter}</span>
            </div>

            <div class="text-base font-semibold text-slate-900 dark:text-slate-100 leading-relaxed math-formula">
              ${currQ.question}
            </div>

            <div class="space-y-2.5">
              ${currQ.options.map((opt, i) => `
                <div
                  onclick="window.selectMockAnswer(${test.currentIndex}, ${i})"
                  class="flex items-start gap-3 p-3.5 rounded-xl border text-sm transition cursor-pointer ${
                    userAns === i
                      ? 'border-brand-600 bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 ring-2 ring-brand-500/30'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-300'
                  }"
                >
                  <span class="w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                    userAns === i
                      ? 'bg-brand-600 text-white'
                      : 'bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600'
                  }">
                    ${String.fromCharCode(65 + i)}
                  </span>
                  <div class="flex-1 pt-0.5 font-medium">${opt}</div>
                </div>
              `).join('')}
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onclick="window.navMockQuestion(-1)"
                class="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30"
                ${test.currentIndex === 0 ? 'disabled' : ''}
              >
                &larr; Previous
              </button>

              <button
                onclick="window.toggleMarkForReview(${test.currentIndex})"
                class="px-3 py-2 rounded-xl text-xs font-semibold ${
                  test.markedForReview[test.currentIndex]
                    ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800'
                    : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                }"
              >
                ${test.markedForReview[test.currentIndex] ? 'Flagged for Review' : 'Flag for Review'}
              </button>

              <button
                onclick="window.navMockQuestion(1)"
                class="px-4 py-2 rounded-xl text-xs font-bold bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-30"
                ${test.currentIndex === test.questions.length - 1 ? 'disabled' : ''}
              >
                Next &rarr;
              </button>
            </div>
          </div>

          <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4 h-fit">
            <h3 class="text-sm font-bold text-slate-800 dark:text-slate-200">Question Palette</h3>

            <div class="grid grid-cols-5 gap-2">
              ${test.questions.map((_, idx) => {
                const isAnswered = test.userAnswers[idx] !== undefined;
                const isFlagged = test.markedForReview[idx];
                const isCurrent = test.currentIndex === idx;

                let cls = 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400';
                if (isAnswered) cls = 'bg-emerald-500 text-white border-emerald-600';
                if (isFlagged) cls = 'bg-purple-500 text-white border-purple-600';
                if (isCurrent) cls += ' ring-2 ring-brand-500 ring-offset-2 dark:ring-offset-slate-900';

                return `
                  <button
                    onclick="window.jumpToMockQuestion(${idx})"
                    class="h-9 rounded-xl border text-xs font-bold flex items-center justify-center transition ${cls}"
                  >
                    ${idx + 1}
                  </button>
                `;
              }).join('')}
            </div>

            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] space-y-1.5 text-slate-500">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-emerald-500"></span> Answered
              </div>
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-purple-500"></span> Flagged for Review
              </div>
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full border border-slate-300 dark:border-slate-600"></span> Unattempted
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // View: SAVED QUESTIONS
  function renderSavedView() {
    const bms = state.bookmarks || [];
    return `
      <div class="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 class="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            ${ICONS.saved} Saved Questions (${bms.length})
          </h1>
          <p class="text-sm text-slate-500 dark:text-slate-400">
            Review questions you bookmarked for later revision along with your personal notes.
          </p>
        </div>

        ${bms.length === 0 ? `
          <div class="p-8 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center space-y-3">
            <div class="text-slate-400 text-3xl">🔖</div>
            <h3 class="font-bold text-base text-slate-800 dark:text-slate-200">No saved questions yet</h3>
            <p class="text-xs text-slate-500 max-w-sm mx-auto">
              While solving questions in the AI Generator or Practice Zone, click the "Save Question" button to bookmark them here.
            </p>
            <button
              onclick="window.appNav('generator')"
              class="px-4 py-2 rounded-xl text-xs font-bold bg-brand-600 text-white"
            >
              Generate Questions
            </button>
          </div>
        ` : `
          <div class="space-y-4">
            ${bms.map(b => {
              const q = b.question;
              return `
                <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-3">
                  <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-2">
                      <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${SUBJECT_THEME[q.subject]?.badge}">
                        ${q.subject}
                      </span>
                      <span class="text-xs text-slate-500">${q.chapter}</span>
                    </div>

                    <button
                      onclick="window.toggleBookmarkById('${q.id}')"
                      class="text-xs font-semibold text-rose-500 hover:underline flex items-center gap-1"
                    >
                      ${ICONS.trash} Remove
                    </button>
                  </div>

                  <div class="text-sm font-semibold text-slate-900 dark:text-slate-100 math-formula">
                    ${q.question}
                  </div>

                  <div class="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-xs text-amber-900 dark:text-amber-200">
                    <strong class="font-bold">Your Revision Note:</strong> ${b.notes || 'Remember key formulas.'}
                  </div>

                  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                    <strong class="font-bold text-brand-600 dark:text-brand-400">Solution:</strong>
${q.solution}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `}
      </div>
    `;
  }

  // View: DASHBOARD
  function renderDashboardView() {
    const stats = getStats();
    const chartDays = getWeeklyChartData();
    const goals = state.goals.filter(g => g.date === getTodayStr());
    const doneGoals = goals.filter(g => g.done).length;

    const maxVal = Math.max(10, ...chartDays.map(d => Math.max(d.attempted, d.correct)));
    const chartHeight = 120;
    const user = getCurrentUser();

    return `
      <div class="max-w-5xl mx-auto space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 class="text-2xl font-black text-slate-900 dark:text-white">
              Welcome back, ${user ? user.name : state.prefs.name}
            </h1>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Targeting: <strong class="text-brand-600 dark:text-brand-400">${state.prefs.examTarget}</strong> · Daily Target: ${state.prefs.dailyTarget} questions
            </p>
          </div>

          <div class="flex items-center gap-2">
            <button
              onclick="window.loadSampleData()"
              class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
            >
              Load Sample Data
            </button>
            <button
              onclick="if(confirm('Reset all progress data?')) window.resetAllData()"
              class="px-3 py-1.5 rounded-xl border border-rose-200 dark:border-rose-900/50 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition"
            >
              Reset Data
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div class="text-xs font-bold text-slate-500 dark:text-slate-400">Total Solved</div>
            <div class="text-2xl font-black text-slate-900 dark:text-white mt-1">${stats.totalAttempted}</div>
            <div class="text-[11px] text-brand-600 dark:text-brand-400 mt-1">${stats.todayCount} solved today</div>
          </div>

          <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div class="text-xs font-bold text-slate-500 dark:text-slate-400">Accuracy Rate</div>
            <div class="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">${stats.accuracy}%</div>
            <div class="text-[11px] text-slate-400 mt-1">${stats.totalCorrect} correct answers</div>
          </div>

          <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div class="text-xs font-bold text-slate-500 dark:text-slate-400">Syllabus Progress</div>
            <div class="text-2xl font-black text-amber-500 mt-1">${Math.round((stats.chaptersDone / CHAPTERS.length) * 100)}%</div>
            <div class="text-[11px] text-slate-400 mt-1">${stats.chaptersDone} of ${CHAPTERS.length} chapters</div>
          </div>

          <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div class="text-xs font-bold text-slate-500 dark:text-slate-400">Day Streak</div>
            <div class="text-2xl font-black text-rose-500 mt-1">${stats.streak} Days</div>
            <div class="text-[11px] text-slate-400 mt-1">Consistency is key</div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-bold text-base text-slate-900 dark:text-white">Weekly Performance</h3>
                <p class="text-xs text-slate-500">Questions attempted vs correct, last 7 days</p>
              </div>
              <div class="flex items-center gap-3 text-xs font-semibold">
                <span class="flex items-center gap-1.5 text-indigo-400"><span class="w-3 h-3 rounded bg-indigo-300 dark:bg-indigo-600"></span> Attempted</span>
                <span class="flex items-center gap-1.5 text-brand-600 dark:text-brand-400"><span class="w-3 h-3 rounded bg-brand-600"></span> Correct</span>
              </div>
            </div>

            <div class="w-full pt-4">
              <div class="grid grid-cols-7 gap-2 items-end h-36 border-b border-slate-100 dark:border-slate-800 pb-2">
                ${chartDays.map(d => {
                  const attH = Math.round((d.attempted / maxVal) * chartHeight);
                  const corH = Math.round((d.correct / maxVal) * chartHeight);
                  return `
                    <div class="flex flex-col items-center justify-end h-full gap-1">
                      <div class="text-[10px] font-bold text-slate-400">${d.attempted}</div>
                      <div class="w-full max-w-[28px] flex gap-1 items-end justify-center">
                        <div class="w-2.5 rounded-t bg-indigo-200 dark:bg-indigo-800/80 transition-all" style="height: ${attH}px" title="${d.attempted} attempted"></div>
                        <div class="w-2.5 rounded-t bg-brand-600 transition-all" style="height: ${corH}px" title="${d.correct} correct"></div>
                      </div>
                      <div class="text-[11px] font-bold text-slate-600 dark:text-slate-400 mt-1">${d.label}</div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>

          <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-base text-slate-900 dark:text-white">Today's Goals</h3>
              <span class="text-xs font-semibold text-brand-600 dark:text-brand-400">${doneGoals}/${goals.length} done</span>
            </div>

            <form onsubmit="window.handleGoalSubmit(event)" class="flex gap-2">
              <input
                id="goal-input"
                type="text"
                placeholder="New goal..."
                class="flex-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-brand-500"
              />
              <button
                type="submit"
                class="px-3 py-1.5 rounded-xl bg-brand-600 text-white font-bold text-xs"
              >
                ${ICONS.plus}
              </button>
            </form>

            <ul class="space-y-2 max-h-52 overflow-y-auto pr-1">
              ${goals.map(g => `
                <li class="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs">
                  <input
                    type="checkbox"
                    ${g.done ? 'checked' : ''}
                    onchange="window.toggleGoalById('${g.id}')"
                    class="rounded text-brand-600 focus:ring-brand-500"
                  />
                  <span class="flex-1 ${g.done ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-200'} font-medium">
                    ${g.text}
                  </span>
                  <button
                    onclick="window.deleteGoalById('${g.id}')"
                    class="text-slate-400 hover:text-rose-500"
                  >
                    ${ICONS.trash}
                  </button>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 class="font-bold text-base text-slate-900 dark:text-white">Chapter Tracker</h3>
              <p class="text-xs text-slate-500">Tick off chapters as you study them to sync with your preparation score.</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            ${SUBJECTS.map(s => {
              const chaps = CHAPTERS.filter(c => c.subject === s);
              return `
                <div class="space-y-2">
                  <div class="font-bold text-xs text-slate-600 dark:text-slate-300 pb-1 border-b border-slate-100 dark:border-slate-800">
                    ${s} (${chaps.filter(c => state.completedChapters[c.id]).length}/${chaps.length})
                  </div>
                  <div class="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                    ${chaps.map(c => {
                      const isDone = !!state.completedChapters[c.id];
                      return `
                        <div
                          onclick="window.toggleChapter('${c.id}')"
                          class="flex items-center gap-2 p-2 rounded-xl border text-xs cursor-pointer transition ${
                            isDone
                              ? 'border-emerald-300 dark:border-emerald-800/60 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200 font-semibold'
                              : 'border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-600 dark:text-slate-400'
                          }"
                        >
                          <span class="w-4 h-4 rounded flex items-center justify-center ${isDone ? 'bg-emerald-500 text-white' : 'border border-slate-300 dark:border-slate-600'} text-[10px]">
                            ${isDone ? '✓' : ''}
                          </span>
                          <span class="flex-1 truncate">${c.name}</span>
                          <span class="text-[10px] text-slate-400">C${c.class}</span>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
          <h3 class="font-bold text-base text-slate-900 dark:text-white">Log External Offline Practice</h3>
          <form onsubmit="window.handleManualLogSubmit(event)" class="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div>
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">Subject</label>
              <select id="log-subject" class="w-full px-3 py-2 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium">
                ${SUBJECTS.map(s => `<option value="${s}">${s}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">Questions Attempted</label>
              <input id="log-attempted" type="number" min="1" max="200" value="15" class="w-full px-3 py-2 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium" />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">Correct Answers</label>
              <input id="log-correct" type="number" min="0" max="200" value="12" class="w-full px-3 py-2 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium" />
            </div>

            <div class="flex items-end">
              <button type="submit" class="w-full py-2 rounded-xl font-bold text-xs bg-brand-600 hover:bg-brand-700 text-white shadow-md">
                Log Session
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  // --- 10. MAIN APP RENDERER ---
  function renderApp() {
    const root = document.getElementById('app');
    if (!root) return;

    let mainContent = '';
    switch (state.activeTab) {
      case 'dashboard':
        mainContent = renderDashboardView();
        break;
      case 'generator':
        mainContent = renderGeneratorView();
        break;
      case 'practice':
        mainContent = renderPracticeView();
        break;
      case 'materials':
        mainContent = renderMaterialsView();
        break;
      case 'mockTest':
        mainContent = renderMockTestView();
        break;
      case 'saved':
        mainContent = renderSavedView();
        break;
      case 'home':
      default:
        mainContent = renderHomeView();
        break;
    }

    root.innerHTML = `
      ${renderSidebar()}
      <div class="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        ${renderPersistentTestBanner()}
        <main class="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          ${mainContent}
        </main>
      </div>
      ${renderAuthModal()}
    `;
  }

  // --- 11. GLOBAL WINDOW ATTACHMENTS (EVENT HANDLERS) ---
  window.appNav = navigate;
  window.appToggleTheme = toggleTheme;

  // Auth Modal Handlers
  window.openAuthModal = openAuthModal;
  window.closeAuthModal = closeAuthModal;

  window.handleLoginSubmit = function (e) {
    e.preventDefault();
    const id = document.getElementById('auth-login-identifier')?.value;
    const pass = document.getElementById('auth-login-password')?.value;
    if (id && pass) {
      loginUser(id, pass);
    }
  };

  window.handleRegisterSubmit = function (e) {
    e.preventDefault();
    const name = document.getElementById('auth-reg-name')?.value;
    const mobile = document.getElementById('auth-reg-mobile')?.value;
    const email = document.getElementById('auth-reg-email')?.value;
    const pass = document.getElementById('auth-reg-password')?.value;
    const exam = document.getElementById('auth-reg-exam')?.value;
    const year = document.getElementById('auth-reg-year')?.value;
    registerUser(name, mobile, email, pass, exam, year);
  };

  window.handleForgotMobileSubmit = function (e) {
    e.preventDefault();
    const mobile = document.getElementById('auth-forgot-mobile')?.value;
    if (mobile) {
      requestPasswordResetOtp(mobile);
    }
  };

  window.handleVerifyOtpSubmit = function (e) {
    e.preventDefault();
    const otp = document.getElementById('auth-otp-input')?.value;
    if (otp) {
      verifyPasswordResetOtp(otp);
    }
  };

  window.handleNewPasswordSubmit = function (e) {
    e.preventDefault();
    const p1 = document.getElementById('auth-new-password')?.value;
    const p2 = document.getElementById('auth-confirm-password')?.value;
    if (p1 && p2) {
      updateNewPassword(p1, p2);
    }
  };

  window.requestPasswordResetOtp = requestPasswordResetOtp;

  window.logoutCurrentUser = function () {
    logoutUser();
  };

  window.handleGenerateSubmit = function (e) {
    e.preventDefault();
    const subject = document.getElementById('gen-subject')?.value;
    const cls = document.getElementById('gen-class')?.value;
    const difficulty = document.getElementById('gen-difficulty')?.value;
    const chapter = document.getElementById('gen-chapter')?.value;
    const prompt = document.getElementById('gen-prompt')?.value;

    const newQ = generateDynamicQuestion(subject, cls, chapter, prompt, difficulty);
    state.currentGeneratedQuestion = newQ;
    state.selectedAnswer = null;
    state.hasSubmittedAnswer = false;
    saveState();
    renderApp();
  };

  window.updateChapterDropdown = function () {
    const subject = document.getElementById('gen-subject')?.value;
    const cls = document.getElementById('gen-class')?.value;
    const chapterSelect = document.getElementById('gen-chapter');
    if (!chapterSelect) return;

    const chaps = getChapters(subject, cls);
    chapterSelect.innerHTML = chaps.map(c => `<option value="${c.name}">Class ${c.class}: ${c.name}</option>`).join('');
  };

  window.selectOption = function (idx) {
    state.selectedAnswer = idx;
    renderApp();
  };

  window.submitCurrentAnswer = function () {
    if (state.selectedAnswer === null) return;
    state.hasSubmittedAnswer = true;
    const q = state.currentGeneratedQuestion || CURATED_QUESTIONS[0];
    const isCorrect = state.selectedAnswer === q.correctIndex;

    state.attempts.push({
      id: 'att-' + Date.now(),
      ts: Date.now(),
      subject: q.subject,
      chapterId: q.chapter,
      attempted: 1,
      correct: isCorrect ? 1 : 0,
      source: 'generator',
    });

    saveState();
    renderApp();
  };

  window.generateNextQuestion = function () {
    const currentQ = state.currentGeneratedQuestion || CURATED_QUESTIONS[0];
    const nextQ = generateDynamicQuestion(currentQ.subject, null, currentQ.chapter, null, currentQ.difficulty);
    state.currentGeneratedQuestion = nextQ;
    state.selectedAnswer = null;
    state.hasSubmittedAnswer = false;
    saveState();
    renderApp();
  };

  window.handleBookmarkToggle = function () {
    const q = state.currentGeneratedQuestion || CURATED_QUESTIONS[0];
    toggleBookmark(q);
  };

  window.toggleBookmarkById = function (qId) {
    const q = CURATED_QUESTIONS.find(x => x.id === qId) || state.currentGeneratedQuestion;
    if (q) toggleBookmark(q);
  };

  window.checkPracticeAnswer = function (qId, optionIdx) {
    const q = CURATED_QUESTIONS.find(x => x.id === qId);
    if (!q) return;

    const isCorrect = optionIdx === q.correctIndex;
    const optEl = document.getElementById(`opt-${qId}-${optionIdx}`);
    if (optEl) {
      if (isCorrect) {
        optEl.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-800', 'dark:bg-emerald-950/60', 'dark:text-emerald-200');
      } else {
        optEl.classList.add('bg-rose-100', 'border-rose-500', 'text-rose-800', 'dark:bg-rose-950/60', 'dark:text-rose-200');
      }
    }

    const solEl = document.getElementById(`sol-box-${qId}`);
    if (solEl) solEl.classList.remove('hidden');

    state.attempts.push({
      id: 'att-prac-' + Date.now(),
      ts: Date.now(),
      subject: q.subject,
      chapterId: q.chapter,
      attempted: 1,
      correct: isCorrect ? 1 : 0,
      source: 'practice',
    });
    saveState();
  };

  window.quickPracticeChapter = function (chapterName) {
    navigate('generator');
    setTimeout(() => {
      const chapterSelect = document.getElementById('gen-chapter');
      if (chapterSelect) {
        chapterSelect.value = chapterName;
      }
    }, 100);
  };

  window.appStartMockTest = function () {
    startMockTest(10);
  };

  window.selectMockAnswer = function (qIdx, optIdx) {
    if (!state.mockTest) return;
    state.mockTest.userAnswers[qIdx] = optIdx;
    saveState();
    renderApp();
  };

  window.navMockQuestion = function (delta) {
    if (!state.mockTest) return;
    const nextIdx = state.mockTest.currentIndex + delta;
    if (nextIdx >= 0 && nextIdx < state.mockTest.questions.length) {
      state.mockTest.currentIndex = nextIdx;
      saveState();
      renderApp();
    }
  };

  window.jumpToMockQuestion = function (idx) {
    if (!state.mockTest) return;
    state.mockTest.currentIndex = idx;
    saveState();
    renderApp();
  };

  window.toggleMarkForReview = function (idx) {
    if (!state.mockTest) return;
    state.mockTest.markedForReview[idx] = !state.mockTest.markedForReview[idx];
    saveState();
    renderApp();
  };

  window.appSubmitMockTest = function () {
    submitMockTest(false);
  };

  window.handleGoalSubmit = function (e) {
    e.preventDefault();
    const input = document.getElementById('goal-input');
    if (input && input.value) {
      addGoal(input.value);
      input.value = '';
    }
  };

  window.toggleGoalById = toggleGoal;
  window.deleteGoalById = deleteGoal;
  window.toggleChapter = toggleChapterCompletion;

  window.handleManualLogSubmit = function (e) {
    e.preventDefault();
    const sub = document.getElementById('log-subject')?.value;
    const att = document.getElementById('log-attempted')?.value;
    const cor = document.getElementById('log-correct')?.value;
    if (sub && att && cor) {
      logPracticeAttempt(sub, 'manual', att, cor);
      alert('Logged session successfully to your dashboard!');
    }
  };

  window.loadSampleData = function () {
    const s = defaultState();
    state.attempts = s.attempts;
    state.completedChapters = s.completedChapters;
    state.goals = s.goals;
    saveState();
    renderApp();
  };

  window.resetAllData = function () {
    state = defaultState();
    saveState();
    applyTheme(state.theme);
    renderApp();
  };

  // --- 12. INITIALIZATION ---
  applyTheme(state.theme);
  initMockHeartbeat();
  renderApp();
})();
