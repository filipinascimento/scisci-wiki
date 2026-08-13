# Patent family expansion deduplication

## Summary

Patent family expansion deduplication expands an initial patent-retrieval set to related family members and then removes duplicate patent applications before computing science-technology measures.

## Canonical Form

- Unit of analysis: patent record, patent application, patent family, jurisdictional family member, retrieval query, or deduplicated patent cohort.
- Typical representation: seed-record count, expanded-family count, deduplicated application count, and retained-analysis cohort.
- Method target: stabilize patent denominators before measuring science reliance, forward citations, country shares, or technology-class composition.
- Empirical signature: the corpus size changes substantially between initial keyword retrieval, family expansion, and deduplication.

## Uses in Science of Science

- Provides the corpus-construction step behind [scientific knowledge application index](../measures/scientific_knowledge_application_index.md) and [forward citation differentiation index](../measures/forward_citation_differentiation_index.md).
- Makes [patent-paper links](../datasets/patent_paper_links.md) less dependent on a single jurisdiction's publication, grant, or family-member record.
- Documents denominator choices in datasets such as the [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md).
- Prevents patent-family expansion from silently inflating country, organization, or IPC-class counts.

## Operationalization

- Run a technology-specific patent query and record the raw hit count.
- Expand each matched record to patent applications in the same patent family.
- Deduplicate the expanded set using the chosen patent-application, publication, or family-level key.
- Report all three counts: query hits, family-expanded records, and deduplicated analysis records.
- Preserve family identifiers so later analyses can switch between application-level and family-level denominators.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) starts with 37,904 nano medical device patent records from DWPI.
- They expand the retrieval to same-family patents, yielding 330,022 patent applications.
- After deduplication, the analysis corpus contains 108,468 patent applications from 2003 to 2012.
- The size change shows why family expansion and deduplication must be reported before interpreting science-citing patent shares or forward-citation averages.

## Caveats

- Patent-family definitions differ across data providers and may change over time.
- Application-level and family-level denominators answer different questions and should not be mixed in the same table.
- Family expansion can introduce country and jurisdiction composition shifts that are unrelated to the original query.
- Deduplication keys should be explicit because titles, publication numbers, application numbers, and family IDs can disagree.

## Links

- [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [scientific knowledge application index](../measures/scientific_knowledge_application_index.md)
- [forward citation differentiation index](../measures/forward_citation_differentiation_index.md)
- [science-based patent grouping](science_based_patent_grouping.md)
- [patent application-year time anchor](patent_application_year_time_anchor.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology—The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `patent_family_expansion_deduplication`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: patent family deduplication; same-family patent expansion; patent corpus deduplication; family-expanded patent denominator
