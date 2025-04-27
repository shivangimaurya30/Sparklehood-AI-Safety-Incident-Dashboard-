export const mockIncidents = [
    { 
      id: 1, 
      title: "Biased Recommendation Algorithm", 
      description: "Algorithm consistently favored certain demographics in job recommendations, leading to potential discrimination issues. The bias was detected in multiple test cases across different user groups.", 
      severity: "Medium", 
      reported_at: "2025-03-15T10:00:00Z" 
    },
    { 
      id: 2, 
      title: "LLM Hallucination in Critical Info", 
      description: "Large Language Model provided incorrect safety procedure information when queried about chemical handling. The hallucination persisted across multiple prompting attempts and could lead to dangerous situations if not corrected.", 
      severity: "High", 
      reported_at: "2025-04-01T14:30:00Z" 
    },
    { 
      id: 3, 
      title: "Minor Data Leak via Chatbot", 
      description: "Chatbot inadvertently exposed non-sensitive user metadata in debug responses. While no PII was leaked, the issue could erode user trust and potentially lead to more serious exposures if not addressed.", 
      severity: "Low", 
      reported_at: "2025-03-20T09:15:00Z" 
    },
    // Add these new incidents below
    { 
      id: 4, 
      title: "Autonomous Vehicle Misclassification", 
      description: "Self-driving car system incorrectly classified pedestrians in low-light conditions, causing unnecessary emergency braking. Issue was detected during nighttime testing in urban environments.", 
      severity: "High", 
      reported_at: "2025-04-10T18:45:00Z" 
    },
    { 
      id: 5, 
      title: "Facial Recognition Bias", 
      description: "System showed significantly lower accuracy for certain ethnic groups during identity verification tests. Performance gap exceeded acceptable thresholds.", 
      severity: "Medium", 
      reported_at: "2025-03-28T11:20:00Z" 
    },
    { 
      id: 6, 
      title: "Predictive Policing Overreach", 
      description: "Crime prediction algorithm flagged neighborhoods with historically high police activity rather than actual crime rates, reinforcing existing biases in patrol patterns.", 
      severity: "High", 
      reported_at: "2025-04-05T09:30:00Z" 
    },
    { 
      id: 7, 
      title: "Medical Diagnosis Overconfidence", 
      description: "AI assistant for preliminary diagnoses displayed excessive confidence in incorrect recommendations for rare conditions, potentially misleading clinicians.", 
      severity: "Medium", 
      reported_at: "2025-03-22T14:15:00Z" 
    },
    { 
      id: 8, 
      title: "Content Moderation False Positives", 
      description: "Automated moderation system incorrectly flagged legitimate educational content about sensitive historical events as inappropriate, limiting academic discourse.", 
      severity: "Low", 
      reported_at: "2025-04-12T10:05:00Z" 
    }
  ];