# Dimensions publication data spine

## Summary

The Dimensions publication data spine is the DOI/PubMed-centered core that Dimensions uses to collect publication records before enriching them with citations, affiliations, funders, classifications, and cross-object links.

## Canonical Form

- Unit of analysis: publication record, DOI, PubMed identifier, Crossref row, PubMed row, or enriched publication spine row.
- Typical representation: publication table keyed by DOI and/or PMID with title, venue, volume, issue, pages, author list, and external identifiers.
- Data target: create a broad publication denominator that can be enhanced by full text, references, affiliations, grants, patents, clinical trials, and altmetric records.
- Empirical signature: publication records from Crossref and PubMed serve as the core key layer for subsequent Dimensions enhancements.

## Uses in Science of Science

- Provides the publication core for [Dimensions](dimensions.md) and its [research-object context graphs](../representations/research_object_context_graphs.md).
- Makes [scholarly identifier spines](../representations/scholarly_identifier_spine.md) operational by treating DOI and PMID as high-value publication anchors.
- Supplies the publication-side keys for [grant-publication linkage tables](grant_publication_linkage_tables.md), [clinical-trial publication linkages](clinical_trial_publication_linkages.md), patent references, and citation networks.
- Connects to [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md), because DOI/PubMed-centered spines are powerful but not universal scholarly denominators.

## Operationalization

- Start from Crossref and PubMed records because they expose recognized identifiers and structured publication metadata.
- Preserve DOI, PMID, title, venue, volume, issue, pages, authors, and any ORCID-like author identifiers separately.
- Join downstream enhancements only through explicit keys or auditable matching provenance.
- Keep non-DOI or non-PubMed exclusions visible when a target population is broader than the Dimensions publication spine.
- Record snapshot date and source-layer version before computing citation, funding, patent, or trial link counts.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) states that Dimensions chose Crossref and PubMed as the logical publication core because of DOI and PubMed identifier ubiquity.
- Hook et al. describe this combined core as a data spine that can be enhanced with additional information through DOI or PubMed identifiers.
- The same full text lists publication metadata available from Crossref, including title, journal, volume, issue, pagination, coauthors, and unique identifiers.
- Hook et al. also state that open-access full text and publisher-supplied full text were mined to enhance the publication core.

## Caveats

- DOI and PubMed coverage is uneven across fields, languages, eras, and document types.
- A publication spine is not automatically a curated research table; duplicates, versions, and nonarticle records still require curation.
- Full-text-derived enhancements inherit access and parsing biases from publishers and open-access sources.

## Links

- [Dimensions](dimensions.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [unique-identifier inclusion gate](../validations/unique_identifier_inclusion_gate.md)
- [research-object context graphs](../representations/research_object_context_graphs.md)
- [grant-publication linkage tables](grant_publication_linkage_tables.md)
- [clinical-trial publication linkages](clinical_trial_publication_linkages.md)
- [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `dimensions_publication_data_spine`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: Dimensions data spine; Crossref PubMed spine; publication core; DOI PMID publication spine
