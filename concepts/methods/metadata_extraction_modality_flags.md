# Metadata extraction modality flags

## Summary

Metadata extraction modality flags record whether scholarly graph metadata were obtained from structured feeds or from unstructured parsing, because extraction modality affects reliability and audit needs.

## Canonical Form

- Unit of analysis: metadata field, affiliation string, work-entity link, source record, or extraction pipeline.
- Typical representation: structured-source flag, unstructured-parse flag, provenance field, or modality-specific confidence score.
- Method target: preserve how a scholarly graph fact was obtained, not only the fact itself.
- Empirical signature: links between works and entities can come from APIs, structured metadata, publisher landing pages, or parsed free text.

## Uses in Science of Science

- Refines [OpenAlex source-ingestion mix](openalex_source_ingestion_mix.md) by preserving extraction modality at the field or edge level.
- Supports [OpenAlex affiliation-ROR linking](openalex_affiliation_ror_linking.md) and [full-text enrichment source provenance](full_text_enrichment_source_provenance.md).
- Helps downstream analysts weight, filter, or audit metadata based on expected reliability.
- Generalizes to Dimensions, OpenAlex, Crossref, PubMed, publisher pages, and local full-text extraction workflows.

## Operationalization

- For each metadata field or graph edge, record whether it came from a structured feed, structured API, unstructured page parsing, full text, or inferred matching.
- Store source name, extraction date, and parser or matching method when available.
- Use modality flags in validation and sensitivity analyses.
- Avoid treating parsed unstructured metadata as equivalent to curated structured metadata without checks.

## Evidence and Validations

- Verified full-text evidence from Priem et al. (2022) states that information about links between works and other entities is obtained by parsing work metadata in structured form, such as the Crossref API, or unstructured form, such as publisher landing pages.
- The paper also describes institution linking from affiliation strings obtained from structured sources such as PubMed and unstructured sources such as publisher webpages.
- This supports retaining extraction modality as a reusable provenance flag for scholarly graph construction.

## Caveats

- Structured feeds can still contain errors, omissions, or stale values.
- Unstructured parsing quality varies by publisher template, language, and document format.
- A modality flag is a provenance signal, not a complete confidence estimate by itself.

## Links

- [OpenAlex source-ingestion mix](openalex_source_ingestion_mix.md)
- [OpenAlex affiliation-ROR linking](openalex_affiliation_ror_linking.md)
- [full-text enrichment source provenance](full_text_enrichment_source_provenance.md)
- [OpenAlex](../datasets/openalex.md)
- [confidence-typed fuzzy linkages](confidence_typed_fuzzy_linkages.md)
- [research-ready table curation](research_ready_table_curation.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; SciSciNet: W4229010617; WoS: unknown]

## Metadata

- Concept ID: `metadata_extraction_modality_flags`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: structured-unstructured metadata flags; metadata modality provenance; extraction-modality flags; scholarly graph provenance modality
