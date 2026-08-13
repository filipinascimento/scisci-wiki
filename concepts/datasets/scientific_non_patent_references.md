# Scientific non-patent references

## Summary

Scientific non-patent references are patent references to research articles and other scientific literature, used as a data layer for measuring science-technology linkage.

## Canonical Form

- Unit of analysis: patent reference, patent, cited paper, technology class, assignee, inventor, field, or institution.
- Typical representation: reference records matched from patent text or front pages to bibliographic records.
- Mechanism or measurement target: reliance on scientific knowledge, science-based technology, and prior-art links between invention and research.
- Empirical signature: a patent contains a non-patent reference that can be resolved to a scientific publication.

## Uses in Science of Science

- Provides the direct evidence layer beneath [patent-paper links](patent_paper_links.md) and the [patent-paper boundary](../representations/patent_paper_boundary.md).
- Supports field, organization, and inventor comparisons of science reliance.
- Helps distinguish immediate paper-to-patent links from longer paths in [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md).
- Can be used to audit whether science-to-technology links are applicant supplied, examiner supplied, or inferred from text matching.
- Feeds [patent citation source roles](../validations/patent_citation_source_roles.md) when source flags are available.

## Operationalization

- Extract non-patent reference strings from patent records, preferably with source-role flags where available.
- Match reference strings to papers using author names, publication year, title words, journal, volume, page, DOI, PubMed ID, or other bibliographic keys.
- Separate scientific non-patent references from non-scientific documents where the research question requires a science-specific measure.
- Use [non-patent-reference science filtering](../methods/non_patent_reference_science_filtering.md) before computing science-reliance measures or attempting expensive paper matching.
- Aggregate counts or shares by patent, field, technology class, assignee, country, institution, or cited paper.
- Preserve [front-page patent-reference scope](../validations/front_page_patent_reference_scope.md), source-role flags, and match-confidence fields when the source data support them.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) uses full-text USPTO XML records to match non-patent references in patents to Web of Science articles, using author, journal, year, title, volume, and page information.
- The same paper reports that the direct patent-paper boundary contains 0.759 million patents directly citing 1.41 million papers, showing that scientific non-patent references are a large but still partial slice of science-technology linkage.
- Ahmadpoor and Jones also use examiner/applicant flags after 2001 as a robustness check. In their corpus, scientific patent-to-publication references are mostly applicant supplied, whereas patent-to-patent references are much more often examiner supplied.
- Earlier science-linkage studies, including Narin et al. (1997), Meyer (2000), and Tijssen et al. (2000), establish the use of patent citations to scientific literature while emphasizing that such citations are noisy indicators of knowledge flow.
- Verified full-text evidence from Wang and Li (2018) adds a patent-level grouping use case: in DWPI nano medical device patents, non-patent citations include scientific articles, withdrawn patents, manuals, databases, web information, news, and other items, so scientific article filtering is required before computing [scientific knowledge application index](../measures/scientific_knowledge_application_index.md).
- Verified full-text evidence from Marx and Fuegi (2020) begins from 36,020,060 USPTO non-patent references from 1947-2018 and excludes clearly non-scientific references before matching candidate scientific references to MAG papers.
- Marx and Fuegi show why non-patent references cannot be counted as scientific references without filtering: sampled front-page references include scientific articles, manuals, patent applications, office actions, and other document types.

## Caveats

- Scientific non-patent references are not always direct evidence that an inventor used the cited paper.
- Patent-office practices, examiner additions, front-page conventions, and jurisdictional rules affect coverage.
- String matching can produce false positives and false negatives, especially for old references, abbreviations, and references without DOIs.
- Confidence-scored links should be calibrated before using them as binary science-reliance indicators.

## Links

- [patent-paper links](patent_paper_links.md)
- [Reliance on Science dataset](reliance_on_science_dataset.md)
- [patent-paper boundary](../representations/patent_paper_boundary.md)
- [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md)
- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)
- [unstructured patent-reference matching](../methods/unstructured_patent_reference_matching.md)
- [non-patent-reference science filtering](../methods/non_patent_reference_science_filtering.md)
- [patent scientific reliance count](../measures/patent_scientific_reliance_count.md)
- [open derivative patent-science linkage](open_derivative_patent_science_linkage.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [scientific knowledge application index](../measures/scientific_knowledge_application_index.md)
- [forward citation differentiation index](../measures/forward_citation_differentiation_index.md)
- [front-page patent-reference scope](../validations/front_page_patent_reference_scope.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [science-technology lag](../measures/science_technology_lag.md)
- [citation networks](../representations/citation_networks.md)

## References

- Narin, F., Hamilton, K. S., & Olivastro, D. (1997). The increasing linkage between U.S. technology and public science. *Research Policy*, 26(3), 317-330. https://doi.org/10.1016/S0048-7333(97)00013-9 [OpenAlex: W2080838006; Dimensions: pub.1039257071; WoS: unknown]
- Meyer, M. S. (2000). Does science push technology? Patents citing scientific literature. *Research Policy*, 29(3), 409-434. https://doi.org/10.1016/S0048-7333(99)00040-2 [OpenAlex: W1965721320; Dimensions: unknown; WoS: unknown]
- Tijssen, R. J. W., Buter, R. K., & van Leeuwen, T. N. (2000). Technological relevance of science: An assessment of citation linkages between patents and research papers. *Scientometrics*, 47(2), 389-412. https://doi.org/10.1023/A:1005603513439 [OpenAlex: W2137759357; Dimensions: pub.1051631504; WoS: unknown]
- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]
- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology—The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]
- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `scientific_non_patent_references`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Narin et al. (1997) (1997)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1016/S0048-7333(97)00013-9`
- OpenAlex ID: `W2080838006`
- Aliases: sNPRs; patent citations to scientific literature; non-patent literature references; scientific prior-art references; patent citations to science
