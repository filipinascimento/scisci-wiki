# Full-text enrichment source provenance

## Summary

Full-text enrichment source provenance records where machine-mined metadata and relations came from before they are added to a scholarly graph.

## Canonical Form

- Unit of analysis: mined attribute, extracted relation, source document, provider route, or enrichment rule.
- Typical representation: provenance column, source-route manifest, extraction log, or relation source flag.
- Method target: make enrichment results reproducible and interpretable across publisher-supplied, open-access, repository, and subscription-mediated full-text sources.
- Empirical signature: an enriched field or edge can be traced back to a source route such as PubMed, DOAJ, publisher full text, open-access copy, HTML, or PDF.

## Uses in Science of Science

- Supports metadata enrichment for [Dimensions](../datasets/dimensions.md), local full-text corpora, and [scholarly data lakes](../datasets/scholarly_data_lakes.md).
- Helps separate user-facing access layers such as [Dimensions full-text delivery layer](dimensions_full_text_delivery_layer.md) from extraction provenance used to build metadata and relations.
- Adds source-route context to [hidden citations](../measures/hidden_citations.md), [full-text hidden citation corpora](../datasets/full_text_hidden_citation_corpora.md), and mined acknowledgments.
- Provides provenance inputs for [research-ready table curation](research_ready_table_curation.md).

## Operationalization

- Store source route, source URL or provider, license/access status, extraction date, parser version, and extracted field or relation type.
- Separate metadata mined from open-access copies from metadata mined through publisher agreements or institutional access.
- Record whether a relation came from structured metadata, full-text extraction, or machine-learning inference.
- Retain parser and normalization logs for relation tables used in citation, funding, patent, clinical-trial, or policy-link analyses.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) states that Dimensions enhances a Crossref/PubMed data spine with additional data linked by DOI or PubMed identifier.
- The paper identifies PubMed fields, PubMed links to open-access versions, DOAJ full text, and publisher-supplied full text as source routes used for enhancement.
- Hook et al. also describe artificial intelligence, machine learning, and topic modeling as enrichment methods applied after the source routes are established.

## Caveats

- Full-text access route is not neutral: publisher agreements, open-access availability, and parser success can all shape which relations are observable.
- Machine-mined enrichment should not be treated as equivalent to structured source metadata unless validation supports that equivalence.
- Access terms may permit mining for data construction while limiting redistribution of raw full text.

## Links

- [Dimensions](../datasets/dimensions.md)
- [Dimensions full-text delivery layer](dimensions_full_text_delivery_layer.md)
- [Dimensions citation relation coverage boundary](../validations/dimensions_citation_relation_coverage_boundary.md)
- [full-text hidden citation corpora](../datasets/full_text_hidden_citation_corpora.md)
- [hidden-citation full-text access barrier](../validations/hidden_citation_full_text_access_barrier.md)
- [open access status](../datasets/open_access_status.md)
- [research-ready table curation](research_ready_table_curation.md)
- [bibliometric data access modes](bibliometric_data_access_modes.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `full_text_enrichment_source_provenance`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: mined metadata provenance; full-text source route; enrichment source flag; full-text extraction provenance
