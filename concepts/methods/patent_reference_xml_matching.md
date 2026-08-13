# Patent reference XML matching

## Summary

Patent reference XML matching resolves scientific non-patent references in full-text patent XML records to bibliographic paper records using parsed reference fields and fuzzy metadata comparison.

## Canonical Form

- Unit of analysis: patent reference, non-patent literature string, parsed author/year/journal/title field, candidate paper, or matched patent-paper citation.
- Typical representation: XML reference record, candidate-generation key, title-similarity score, matched paper ID, match confidence, and unmatched reference log.
- Method target: turn noisy patent references to scientific literature into auditable [patent-paper links](../datasets/patent_paper_links.md).
- Empirical signature: patent-to-paper boundaries depend on text parsing and entity resolution, not only on clean DOI citation fields.

## Uses in Science of Science

- Creates the direct edge layer for [scientific non-patent references](../datasets/scientific_non_patent_references.md), [patent-paper boundary](../representations/patent_paper_boundary.md), and [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md).
- Supplies matched paper-patent edges used by [science-technology distance](../measures/science_technology_distance.md), [science-technology lag](../measures/science_technology_lag.md), and [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md).
- Connects with [patent citation source roles](../validations/patent_citation_source_roles.md) when XML records identify applicant-added versus examiner-added references.
- Provides a reusable entity-resolution motif for patent-science linkage datasets.

## Operationalization

- Parse full-text patent XML reference strings and identify scientific non-patent references.
- Extract fields such as first author, publication year, journal, title, volume, issue, and page when present.
- Generate candidate paper records from a bibliographic database using high-precision keys such as first author and year.
- Select the candidate paper with the closest match on journal, title, pages, or other available fields.
- Store match confidence, unmatched references, role flags, and the patent XML source version.
- When structured XML fields are unavailable or unreliable, use [unstructured patent-reference matching](unstructured_patent_reference_matching.md) and preserve confidence-score provenance.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) reports that patent citations to Web of Science articles were provided by Gaetani and Li Bergolis using a full-text patent XML database from the USPTO.
- The matching process uses non-patent references in patents and matches them to Web of Science articles.
- Their supplement describes a two-step matching procedure: first extracting the first author and publication year from the patent reference to locate candidate Web of Science papers, then selecting the paper with the closest match to the USPTO reference using fields such as journal name and paper title.
- The paper notes that full-text XML patent data are available from USPTO bulk data, making the matching procedure reproducible in principle.
- Ahmadpoor and Jones use the resulting matched patent-paper references as the boundary layer for their integrated citation network and distance metric.
- Verified full-text evidence from Marx and Fuegi (2020) shows the unstructured-reference variant of this problem: front-page non-patent reference strings often lack reliable titles, years, page fields, or journal names, so candidate generation and scoring must tolerate missing and noisy metadata.

## Caveats

- Patent reference strings can be incomplete, abbreviated, misspelled, or inconsistent across patent records.
- First-author and year blocking can miss matches when patent references omit or misstate those fields.
- Fuzzy matching can create false links for common titles, journals, or author names.
- Matches inherit Web of Science coverage limits and should be rechecked when using OpenAlex, Dimensions, PubMed, or Crossref as the paper corpus.
- Structured XML matching and unstructured front-page matching should not be mixed without recording their different error profiles.

## Links

- [patent-paper links](../datasets/patent_paper_links.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [unstructured patent-reference matching](unstructured_patent_reference_matching.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [patent-science precision-recall calibration](../validations/patent_science_precision_recall_calibration.md)
- [patent-paper boundary](../representations/patent_paper_boundary.md)
- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [science-technology lag](../measures/science_technology_lag.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [author metadata similarity features](../representations/author_metadata_similarity_features.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]
- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `patent_reference_xml_matching`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Aliases: patent NPL matching; patent-paper reference matching; USPTO XML reference matching; scientific reference matching in patents
