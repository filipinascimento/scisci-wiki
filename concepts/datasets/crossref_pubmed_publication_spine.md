# Crossref-PubMed publication spine

## Summary

Dimensions uses Crossref plus PubMed as a publication backbone because both expose broad metadata and strong identifiers.

## Canonical Form

- Unit of analysis: publication, DOI, PMID, Crossref record, PubMed record, author, venue, ORCID, affiliation, or citation relation.
- Typical representation: publication core keyed by DOI and PMID before enrichment.
- Mechanism, measurement, or validation target: source backbone for publication-node coverage in a linked research database.
- Empirical signature: publication coverage and downstream links inherit the strengths and gaps of DOI/PMID-centered source spines.

## Uses in Science of Science

- Refines publication-backbone construction by linking it to [dimensions](dimensions.md) and [crossref doi sampling frame](crossref_doi_sampling_frame.md).
- Useful as a reusable check when [mag publication backbone](mag_publication_backbone.md) is used in science-of-science inference.
- Creates cross-links to [scholarly identifier spine](../representations/scholarly_identifier_spine.md) so the motif is not interpreted in isolation.

## Operationalization

- Construct a publication core keyed by DOI and PMID.
- Attach authors, venues, ORCIDs, affiliations, funders, citations, and full-text-derived fields after the core is defined.
- Track book, chapter, and non-PubMed coverage separately from the DOI/PMID core.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) describes Crossref and PubMed as the logical publication core because DOI and PubMed identifiers are ubiquitous.
- The source choice anchors the publication layer before grants, patents, trials, policy, and citation relations are linked.

## Caveats

- DOI/PMID reliance favors journal and biomedical content.
- Book/chapter and non-biomedical records can require separate identifier hierarchies and curation.

## Links

- [Dimensions](dimensions.md)
- [Crossref DOI sampling frame](crossref_doi_sampling_frame.md)
- [MAG publication backbone](mag_publication_backbone.md)
- [Scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [PubMed-indexed RCR eligibility boundary](pubmed_indexed_rcr_eligibility_boundary.md)
- [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `crossref_pubmed_publication_spine`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: publication data spine; DOI-PMID backbone; Crossref PubMed core
