# Scopus author profile disambiguation audit

## Summary

Scopus author profile disambiguation audit checks whether Scopus author profiles split one scientist into multiple records or merge different scientists into one record.

## Canonical Form

- Unit of analysis: Scopus author profile, publication-author mention, inferred scientist, field/subfield profile, or validation sample.
- Typical representation: precision, recall, split-profile count, merged-profile flag, manual audit sample, or anomalous field-combination screen.
- Validation target: whether author-level citation indicators are attached to the correct person identity.
- Empirical signature: author records show duplicate profiles for the same scientist, improbable field combinations, or manual-review mismatches.

## Uses in Science of Science

- Provides a source-specific validation layer for [author name disambiguation](../methods/author_name_disambiguation.md).
- Supports author-level datasets such as the [standardized author citation database](../datasets/standardized_author_citation_database.md).
- Guards [author citation composite indicator](../measures/author_citation_composite_indicator.md), [career-long and single-year author impact](../measures/career_long_single_year_author_impact.md), and [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md).
- Connects Scopus profile quality to general [homonym and synonym author errors](homonym_synonym_author_errors.md) and [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md).
- Complements identifier-assisted approaches such as [ORCID-assisted person disambiguation](../methods/orcid_assisted_person_disambiguation.md).

## Operationalization

- Start from Scopus author profiles and any available database-reported precision/recall audits.
- Manually inspect samples of high-impact or common-name authors for split records and merged records.
- Search for duplicate records using names, affiliations, topics, coauthors, and publication overlap.
- Flag possible merges when one author profile has highly noncontiguous top subfields or implausible topic combinations.
- Report residual uncertainty before using author-level metrics in evaluation or ranking.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) describes Scopus author profiles as a combination of curated profiles and an author-profiling algorithm.
- The paper reports Scopus-provided 2017 validation estimates of 98% precision and 93.5% recall based on manual assessment of more than 6,000 authors.
- Ioannidis et al. also report later Scopus validation estimates of 99.9% precision and over 94% recall based on more than 10,000 author records.
- The authors' own checks still find split profiles: a random sample of 500 top-1,000,000 authors contains 13 authors split into two records.
- Among the top 150 authors by composite score, Ioannidis et al. report 20 with two records and 3 with three records among the top 1,000,000 author records.
- The paper notes that Chinese and Korean names may be more vulnerable and that noncontiguous top subfields, such as diabetes and particle physics, can signal inappropriate merging.

## Caveats

- High precision and recall estimates do not remove the need for downstream audits in high-stakes author evaluation.
- Split profiles can undercount an author's impact, while merged profiles can inflate it.
- Manual checks are especially important for common names, transliteration variants, and interdisciplinary profiles.
- Database-reported validation metrics may not match the difficulty of the specific author subset being studied.

## Links

- [author name disambiguation](../methods/author_name_disambiguation.md)
- [Scopus](../datasets/scopus.md)
- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [author citation composite indicator](../measures/author_citation_composite_indicator.md)
- [career-long and single-year author impact](../measures/career_long_single_year_author_impact.md)
- [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)
- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)
- [ORCID-assisted person disambiguation](../methods/orcid_assisted_person_disambiguation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `scopus_author_profile_disambiguation_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: Scopus author disambiguation audit; Scopus profile split audit; Scopus author merge audit; author-profile disambiguation validation
