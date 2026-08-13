# OpenAlex author-disambiguation features

## Summary

OpenAlex author-disambiguation features are the metadata signals used to group author mentions into inferred OpenAlex author entities, including ORCID, publication records, and citation histories.

## Canonical Form

- Unit of analysis: author mention, OpenAlex author entity, ORCID link, publication record, citation-history feature, or disambiguation cluster.
- Typical representation: feature vector over identifiers, works, coauthors, affiliations, venues, topics, and citations.
- Method target: resolve author mentions in an open scholarly graph.
- Empirical signature: author entities are inferred by combining persistent identifiers with publication and citation evidence.

## Uses in Science of Science

- Provides an OpenAlex-specific implementation layer for [author name disambiguation](author_name_disambiguation.md).
- Connects [OpenAlex canonical external IDs](../representations/openalex_canonical_external_ids.md) to person-level entity resolution through ORCID.
- Requires [OpenAlex author ORCID coverage audit](../validations/openalex_author_orcid_coverage_audit.md) before ORCID-linked authors are used as a complete or representative author population.
- Supports [OpenAlex authorship object](../representations/openalex_authorship_object.md), coauthorship networks, mobility panels, career-impact studies, and team-size analyses.

## Operationalization

- Use ORCID as a high-confidence feature when present, but retain non-ORCID authors in the denominator.
- Combine publication history, citation history, coauthors, affiliations, venues, and field/topic evidence where available.
- Validate author clusters against ORCID, institutional rosters, CVs, manually labeled samples, or source-specific audits.
- Track snapshot date because OpenAlex author clusters may split, merge, or gain new identifiers over time.

## Evidence and Validations

- Verified full-text evidence from Priem, Piwowar, and Orr (2022) states that the canonical external ID for OpenAlex authors is ORCID.
- Priem et al. note that only a small percentage of authors have ORCID, although coverage is higher for recent works.
- The paper states that OpenAlex uses ORCID as a disambiguation feature when available.
- Priem et al. also state that publication records and citation histories are used in the author-disambiguation algorithm.

## Caveats

- ORCID is incomplete and uneven by field, country, career stage, and time.
- Publication and citation-history features can reinforce errors for common names, large teams, or authors who change fields.
- OpenAlex author IDs should be audited before high-stakes evaluation, demographic inference, or career mobility analysis.

## Links

- [author name disambiguation](author_name_disambiguation.md)
- [OpenAlex](../datasets/openalex.md)
- [OpenAlex canonical external IDs](../representations/openalex_canonical_external_ids.md)
- [OpenAlex authorship object](../representations/openalex_authorship_object.md)
- [OpenAlex author ORCID coverage audit](../validations/openalex_author_orcid_coverage_audit.md)
- [author metadata similarity features](../representations/author_metadata_similarity_features.md)
- [ORCID-assisted person disambiguation](orcid_assisted_person_disambiguation.md)
- [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_author_disambiguation_features`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: OpenAlex author clustering features; ORCID publication citation disambiguation; OpenAlex person resolution; OpenAlex author entity resolution
