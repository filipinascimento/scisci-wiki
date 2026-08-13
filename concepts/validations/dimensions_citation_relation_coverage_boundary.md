# Dimensions citation relation coverage boundary

## Summary

Dimensions citation relation coverage boundary is the caveat that citation edges in Dimensions depend on several reference-acquisition routes rather than a single complete citation source.

## Canonical Form

- Unit of analysis: publication-to-publication citation edge, reference list, cited publication, or source route.
- Typical representation: citation table plus source provenance, extract date, and coverage notes.
- Validation target: distinguish missing references caused by source deposit and mining limits from missing references caused by substantive absence.
- Empirical signature: citation counts or citation-network edges vary by whether references came from Crossref/I4OC deposits, publisher partnerships, open-access mining, HTML extraction, or PDF extraction.

## Uses in Science of Science

- Adds relation-level provenance to [Dimensions](../datasets/dimensions.md) analyses.
- Supports cross-source checks against [Web of Science](../datasets/web_of_science.md), [OpenAlex](../datasets/openalex.md), Scopus, or [SciSciNet-v2](../datasets/sciscinet_v2.md).
- Specializes [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) for Dimensions citation edges.
- Pairs with [citation data census dates](../methods/citation_data_census_dates.md) when relation counts are compared across snapshots.

## Operationalization

- Record the Dimensions snapshot or API extraction date used for citation edges.
- Track whether citation relations were taken from native source fields, Crossref/I4OC reference deposits, publisher-supplied content, open-access full text, HTML extraction, or PDF extraction when such provenance is available.
- Compare citation counts and network degrees with at least one alternate source for high-stakes field, institution, author, or paper-level claims.
- Treat downstream measures such as field-normalized impact, disruption, or bibliographic coupling as source-bound until relation coverage has been audited.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) describes Dimensions as building its citation graph through multiple techniques.
- The paper identifies Crossref/I4OC reference deposits, direct publisher participation, open-access copies, and extracted HTML/PDF references as separate routes into the citation graph.
- Hook et al. report large launch-time relation counts for publication-to-publication, publication-to-clinical-trial, and publication-to-patent links, making the counts dated relation-census values rather than permanent constants.

## Caveats

- The same publication node may be present even when its outgoing or incoming reference links are incomplete.
- A low Dimensions citation count can reflect coverage boundaries as well as scholarly attention.
- Relation provenance can be unavailable to downstream analysts, so method sections should describe the source and extraction route as fully as possible.

## Links

- [Dimensions](../datasets/dimensions.md)
- [Dimensions publication data spine](../datasets/dimensions_publication_data_spine.md)
- [Dimensions relation-query language](../methods/dimensions_relation_query_language.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [full cited-reference indexing](../datasets/full_cited_reference_indexing.md)
- [full-text enrichment source provenance](../methods/full_text_enrichment_source_provenance.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `dimensions_citation_relation_coverage_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: Dimensions citation coverage caveat; citation relation provenance; reference-source boundary; Dimensions citation edge coverage
