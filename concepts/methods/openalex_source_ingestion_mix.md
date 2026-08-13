# OpenAlex source-ingestion mix

## Summary

OpenAlex source-ingestion mix describes the heterogeneous upstream sources OpenAlex uses to build and update work records, including Crossref, PubMed, repositories, publisher pages, and MAG for older works.

## Canonical Form

- Unit of analysis: work record, upstream source, metadata field, source provenance, or ingestion rule.
- Typical representation: source-priority map, source provenance columns, and field-level extraction routes.
- Method target: understand where OpenAlex metadata comes from before treating it as a unified source.
- Empirical signature: work metadata combines structured feeds, repository records, and parsed web pages.

## Uses in Science of Science

- Explains why [OpenAlex](../datasets/openalex.md) records should retain provenance when used for paper queues, citation networks, field labels, and affiliation joins.
- Connects [Crossref DOI sampling frame](../datasets/crossref_doi_sampling_frame.md), [Web of Science](../datasets/web_of_science.md), [PubMed](../datasets/dimensions_publication_data_spine.md), and the [MAG publication backbone](../datasets/mag_publication_backbone.md) as source layers rather than interchangeable truth.
- Supports [publisher-hosted route precedence](../validations/publisher_hosted_route_precedence.md) and [open access resolver workflows](open_access_resolver_workflows.md), because landing-page parsing and repository records can disagree.

## Operationalization

- Preserve upstream source indicators when extracting OpenAlex records.
- Separate DOI-based structured records from metadata parsed from publisher landing pages or repository pages.
- Treat MAG-derived older records as historical carryover and verify current records through DOI/title checks where possible.
- When a high-stakes field depends on metadata provenance, cross-check with Dimensions, Crossref, PubMed, publisher pages, or local full text.

## Evidence and Validations

- Verified full-text evidence from Priem, Piwowar, and Orr (2022) states that OpenAlex collects new works from Crossref, PubMed, institutional repositories, disciplinary repositories such as arXiv, and MAG for older works.
- Priem et al. state that links between works and other entities are obtained by parsing work metadata from structured sources such as Crossref and unstructured sources such as publisher landing pages.
- The paper reports that OpenAlex indexed about 209 million works at launch and added about 50,000 works daily.
- The same evidence motivates keeping source provenance visible because OpenAlex is an aggregation layer, not a single-origin bibliography.

## Caveats

- Upstream sources differ in DOI coverage, affiliation completeness, reference availability, and update lag.
- Publisher landing-page parsing can fail or change when page templates change.
- MAG-derived older records may carry legacy classifications and entity-resolution decisions.

## Links

- [OpenAlex](../datasets/openalex.md)
- [OpenAlex distribution channels](openalex_distribution_channels.md)
- [OpenAlex work-version resolution](openalex_work_version_resolution.md)
- [OpenAlex metadata validation gap](../validations/openalex_metadata_validation_gap.md)
- [Crossref DOI sampling frame](../datasets/crossref_doi_sampling_frame.md)
- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [Dimensions publication data spine](../datasets/dimensions_publication_data_spine.md)
- [publisher-hosted route precedence](../validations/publisher_hosted_route_precedence.md)
- [open access resolver workflows](open_access_resolver_workflows.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_source_ingestion_mix`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: OpenAlex source mix; OpenAlex upstream sources; OpenAlex metadata ingestion; Crossref PubMed repository MAG ingestion
