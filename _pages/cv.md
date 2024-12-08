---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* The University of Hong Kong, School of Computing and Data Science, 2021-present
  * Major: Computer science

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Research experience
======
  **LLM Agents to simulate human action**  
  *Peking University, Beijing Institute for General Artificial Intelligence (BIGAI)*  
  *Mar 2024 – Sept 2024*  
  - Designed An agent to simulate human-like daily activities  
  - Designed environments for evaluating the agent  
  - Demonstrated that the Desire-driven autonomous agent significantly outperforms baseline agents in generating realistic activity sequences, as evaluated by GPT-4 and human annotators
  - Authored a paper based on this work, which is currently under submission
  
