# OpenAlex source coverage boundary

## Summary

OpenAlex coverage depends on heterogeneous source ingestion, DOI availability, repository inputs, daily additions, and MAG's role for older records.

## Canonical Form

- Unit of analysis: work, source channel, DOI flag, repository input, publisher input, MAG-derived record, year, or field.
- Typical representation: source-stratified coverage audit for OpenAlex work records.
- Mechanism, measurement, or validation target: coverage boundary of open scholarly knowledge graph ingestion.
- Empirical signature: coverage rates vary by source channel, year, DOI presence, and dependence on MAG-derived older records.

## Uses in Science of Science

- Refines OpenAlex coverage validation by linking it to [artifact population inference boundary](artifact_population_inference_boundary.md) and [doi denominator coverage bias](doi_denominator_coverage_bias.md).
- Useful as a reusable check when [crossref doi sampling frame](../datasets/crossref_doi_sampling_frame.md) is used in science-of-science inference.
- Creates cross-links to [mag publication backbone](../datasets/mag_publication_backbone.md) so the motif is not interpreted in isolation.

## Operationalization

- Stratify work coverage by source, year, DOI presence, repository or publisher origin, and older-work dependence on MAG.
- Compare source-specific records against Dimensions, Crossref, PubMed, WoS, or local manifests when evaluation stakes are high.
- Report language, document-type, field, and region gaps separately from raw work counts.

## Evidence and Validations

- Verified full-text evidence from Priem et al. (2022) reports large work counts, daily additions, roughly half of works with DOIs, multiple ingestion sources, and MAG as a key older-work source.
- The motif treats OpenAlex source mix as a validation boundary rather than a single coverage number.

## Caveats

- Source-level coverage counts do not prove field, language, document-type, or region completeness.
- MAG-derived older records can preserve coverage while importing stale or algorithmic metadata dependencies.

## Links

- [Artifact-population inference boundary](artifact_population_inference_boundary.md)
- [DOI denominator coverage bias](doi_denominator_coverage_bias.md)
- [Crossref DOI sampling frame](../datasets/crossref_doi_sampling_frame.md)
- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [Citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [OpenAlex](../datasets/openalex.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_source_coverage_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arxiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: OpenAlex coverage frame; source-ingestion boundary; older-work MAG coverage
