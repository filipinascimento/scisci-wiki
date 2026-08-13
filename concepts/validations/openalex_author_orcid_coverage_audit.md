# OpenAlex author ORCID coverage audit

## Summary

OpenAlex author ORCID coverage audit measures how often OpenAlex author entities carry ORCID identifiers and whether ORCID-linked authors are representative enough for author-level analyses.

## Canonical Form

- Unit of analysis: OpenAlex author entity, ORCID field, work authorship, publication year, field, country, institution, or snapshot.
- Typical representation: ORCID-present share, missing-ORCID share, ORCID coverage profile, and ORCID-linked author subset.
- Validation target: determine whether ORCID-assisted person resolution or validation generalizes beyond the ORCID-bearing author subset.
- Empirical signature: ORCID coverage is incomplete and stronger for some recent or professionally registered author populations.

## Uses in Science of Science

- Validates [OpenAlex author-disambiguation features](../methods/openalex_author_disambiguation_features.md) before ORCID is treated as a broadly available person identifier.
- Qualifies [author name disambiguation](../methods/author_name_disambiguation.md), [OpenAlex authorship object](../representations/openalex_authorship_object.md), mobility panels, and career-impact studies.
- Complements [ORCID-assisted person disambiguation](../methods/orcid_assisted_person_disambiguation.md) by making ORCID coverage a denominator rather than an assumed property.
- Supports [homonym and synonym author errors](homonym_synonym_author_errors.md) audits when ORCID-labeled cases are used as validation data.

## Operationalization

- Compute ORCID coverage among OpenAlex author entities or among authorship rows, depending on the target analysis.
- Stratify by publication year, field or concept, country, institution type, career age, publication count, and source snapshot when available.
- Keep non-ORCID authors in the denominator for author-level rates unless the research design explicitly studies ORCID adopters.
- Validate author clusters with ORCID where available, but compare error patterns against non-ORCID samples or independent hand labels.

## Evidence and Validations

- Verified full-text evidence from Priem, Piwowar, and Orr (2022) states that the canonical external ID for OpenAlex authors is ORCID.
- The paper notes that only a small percentage of authors have ORCID, though coverage is higher for authors of more recent works.
- Priem et al. also state that OpenAlex uses ORCID as a feature for author disambiguation when it is available.
- This evidence makes ORCID coverage a necessary validation layer before using ORCID-linked authors as a gold-standard or complete author population.

## Caveats

- ORCID adoption is voluntary and can correlate with field, institution, geography, career stage, and publication era.
- ORCID-labeled author clusters can be high-confidence examples while still being a biased validation subset.
- OpenAlex author entities can split, merge, or gain ORCID links across snapshots.

## Links

- [OpenAlex](../datasets/openalex.md)
- [OpenAlex author-disambiguation features](../methods/openalex_author_disambiguation_features.md)
- [OpenAlex authorship object](../representations/openalex_authorship_object.md)
- [OpenAlex canonical external IDs](../representations/openalex_canonical_external_ids.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [ORCID-assisted person disambiguation](../methods/orcid_assisted_person_disambiguation.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)
- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_author_orcid_coverage_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: OpenAlex ORCID coverage; author ORCID coverage audit; ORCID-linked author denominator; OpenAlex author identifier coverage
