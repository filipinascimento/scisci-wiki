# PatentsView utility patent sample

## Summary

PatentsView utility patent sample is a patent corpus restricted to U.S. utility patents with machine-readable titles, abstracts, citations, classes, inventors, and application or grant years.

## Canonical Form

- Unit of analysis: U.S. utility patent, patent citation, inventor, assignee, technology class, application year, or grant year.
- Typical representation: patent table, citation edge table, patent title/abstract text, inventor list, assignee field, USPTO class, and utility-patent filter.
- Data target: construct a consistent invention corpus for technology-disruption, science-technology distance, and innovation-career analyses.
- Empirical signature: analytical samples drop non-utility patents and often use application years or grant windows to avoid inconsistent machine-readable coverage.

## Uses in Science of Science

- Provides the patent-side data layer for [disruption index](../measures/disruption_index.md), [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md), and [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md).
- Supports [patent-paper links](patent_paper_links.md), [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md), and [science-technology distance](../measures/science_technology_distance.md).
- Supplies patent metadata for [patent application-year time anchor](../methods/patent_application_year_time_anchor.md), [age at first invention](../measures/age_at_first_invention.md), and [knowledge depth citation trees](../measures/knowledge_depth_citation_trees.md).
- Complements [Dimensions](dimensions.md), [SciSciNet-v2](sciscinet_v2.md), and OpenAlex-based paper layers when studying science-technology linkage.

## Operationalization

- Start from PatentsView or another USPTO-derived bulk patent source.
- Keep utility patents when the study requires comparable invention records and citation practices.
- Restrict years to the period with reliable machine-readable records and sufficient follow-up.
- Attach title, abstract, citation edges, inventors, assignees, technology class, application year, and grant year.
- Record exclusions for non-utility patents, missing classes, no citations, or outside-window records.

## Evidence and Validations

- Verified full-text evidence from Park, Leahey, and Funk (2023) uses PatentsView data on 6.5 million patents granted from 1976 to 2017 with 92 million citations, titles, and abstracts.
- Park et al. focus on utility patents, which they report cover 91% of patented inventions in their data, and subset to 1976-2010 for an analytical sample of 3,912,353 patents.
- The same paper uses the PatentsView patent sample to estimate CD5 trends, title and abstract diversity, narrowing in cited knowledge, and citation-network rewiring robustness.
- Verified full-text evidence from Funk and Owen-Smith (2017) also focuses on USPTO utility patents to avoid complexities from differences in citation practices for design and plant patents.
- Funk and Owen-Smith use 2.9 million U.S. utility patents, excluding patents outside the NBER technology categorization scope and patents with missing issue-year information.
- The same utility-patent sample supports [CD-index undefined cases](../validations/cd_index_undefined_cases.md), [patent disruption face-validity cases](../validations/patent_disruption_face_validity_cases.md), and the 110-university [university patent portfolio disruption](../measures/university_patent_portfolio_disruption.md) analysis.

## Caveats

- Utility patents are not all inventions; trade secrets, design patents, plant patents, software releases, standards, and informal innovation are outside the main corpus.
- PatentsView coverage, title/abstract availability, and citation completeness vary by year and patent type.
- Grant-year windows and application-year anchors answer different timing questions.
- U.S. patent data are not a complete global invention corpus.

## Links

- [patent-paper links](patent_paper_links.md)
- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [patent application-year time anchor](../methods/patent_application_year_time_anchor.md)
- [patent reference XML matching](../methods/patent_reference_xml_matching.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)
- [disruption index](../measures/disruption_index.md)
- [CD-index undefined cases](../validations/cd_index_undefined_cases.md)
- [patent disruption face-validity cases](../validations/patent_disruption_face_validity_cases.md)
- [university patent portfolio disruption](../measures/university_patent_portfolio_disruption.md)
- [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md)
- [age at first invention](../measures/age_at_first_invention.md)
- [knowledge depth citation trees](../measures/knowledge_depth_citation_trees.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; WoS: unknown]
- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `patentsview_utility_patent_sample`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Aliases: PatentsView utility patents; USPTO utility patent corpus; utility-patent analytical sample; patent disruption corpus
