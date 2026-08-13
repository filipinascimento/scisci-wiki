# Patent citation source roles

## Summary

Patent citation source roles distinguish references supplied by patent applicants from references added by patent examiners, so patent citation evidence can be interpreted with appropriate caution.

## Canonical Form

- Unit of analysis: patent reference, patent-to-patent citation, patent-to-publication citation, examiner-added reference, applicant-added reference, or patent cohort.
- Typical representation: citation source flag, applicant/examiner share, source-filtered citation network, or robustness comparison.
- Validation target: whether patent citation links plausibly reflect inventor knowledge use, examiner prior-art search, or both.
- Empirical signature: science-to-technology conclusions remain stable after removing examiner-added citations or separating citation roles.

## Uses in Science of Science

- Qualifies [scientific non-patent references](../datasets/scientific_non_patent_references.md) as evidence of science-to-technology linkage.
- Helps validate [patent-paper links](../datasets/patent_paper_links.md), [patent-paper boundary](../representations/patent_paper_boundary.md), and [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md).
- Separates prior-art relevance from inventor-side knowledge use when interpreting [science-technology distance](../measures/science_technology_distance.md).
- Generalizes to [patent-to-patent citation noise](patent_to_patent_citation_noise.md), where examiner and attorney practices affect patent-to-patent edges especially strongly.
- Connects patent citation practices to [disruption measure validation](disruption_measure_validation.md), because patent citation networks are used for both translation and disruption measures.

## Operationalization

- Use patent records that include source-role flags for cited references, preserving source-role flags from [patent reference XML matching](../methods/patent_reference_xml_matching.md) when building patent-paper edges.
- Compute separate applicant-added and examiner-added shares for patent-to-patent and patent-to-publication references.
- Recompute boundary membership, distance, or disruption-related measures after excluding examiner-added citations.
- Compare field, technology-class, and impact conclusions across full and applicant-only networks.
- Treat source-role missingness as a coverage caveat when older patent records or jurisdictions do not expose this information.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) uses USPTO XML records after 2001 to identify whether references were added by applicants or examiners.
- Their supplement reports that 36% of patent-to-patent references but only 4% of patent-to-publication references were examiner-added, implying that scientific non-patent references were driven almost entirely by applicants in that period.
- Ahmadpoor and Jones report that dropping examiner-added citations leaves the paper-side distance measure little changed and preserves broad technology-class ordering, while patent-side distances can shift more because patent-to-patent references are more often examiner-added.
- Verified full-text evidence from Funk and Owen-Smith (2017) motivates patent citations as prior-art links while noting the institutional review process and applicant incentives to cite relevant predecessors.
- Verified full-text evidence from Marx and Fuegi (2020) releases PCS links with source-role values for applicant, examiner, other, or unknown, preserving source-role flags alongside confidence scores in the link table.
- Marx and Fuegi motivate source-role interpretation by noting that patent-to-patent citations are often examiner-added whereas patent citations to science are more often applicant supplied in prior evidence.

## Caveats

- Applicant-added citations are still not perfect evidence that the inventor personally used the cited work.
- Examiner-added citations can still be meaningful prior art even when they do not reflect the inventor's creative process.
- Source-role flags are jurisdiction- and time-dependent; many patent datasets lack complete role information.
- Removing examiner citations can change graph connectivity, especially for patent-to-patent paths.
- Source-role validation should be paired with match-quality validation; an applicant-supplied reference can still be an incorrect algorithmic paper match.

## Links

- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [patent reference XML matching](../methods/patent_reference_xml_matching.md)
- [unstructured patent-reference matching](../methods/unstructured_patent_reference_matching.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)
- [patent-paper boundary](../representations/patent_paper_boundary.md)
- [patent-to-patent citation noise](patent_to_patent_citation_noise.md)
- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [science-technology lag](../measures/science_technology_lag.md)
- [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md)
- [disruption measure validation](disruption_measure_validation.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]
- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; WoS: unknown]
- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `patent_citation_source_roles`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Dimensions ID: `pub.1091201170`
- SciSciNet ID: `W2743628650`
- Aliases: applicant examiner citation roles; examiner-added patent citations; applicant-added patent citations; patent reference source roles; PCS source role flags
