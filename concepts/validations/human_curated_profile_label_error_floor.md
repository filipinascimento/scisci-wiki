# Human-curated profile label error floor

## Summary

Human-curated profile label error floor is the validation motif that researcher-maintained identifier profiles are useful labels but still contain omissions and false inclusions.

## Canonical Form

- Unit of analysis: ResearcherID profile, ORCID profile, CV-derived publication list, benchmark label, or author cluster.
- Typical representation: human-curated identifier profile, label disagreement, gold-standard error floor, or profile-maintenance caveat.
- Validation target: avoid treating human-curated profiles as perfect ground truth.
- Empirical signature: some apparent algorithm errors may actually be benchmark label errors.

## Uses in Science of Science

- Adds label-quality scope to [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md).
- Interacts with [identifier-covered evaluation denominator](identifier_covered_evaluation_denominator.md) and [OpenAlex author ORCID coverage audit](openalex_author_orcid_coverage_audit.md).
- Helps interpret [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md) when benchmark profiles are researcher-maintained.

## Operationalization

- Compare labels across ResearcherID, ORCID, CVs, institutional pages, and sampled human audits.
- Estimate false-positive and false-negative publication-profile rates where possible.
- Report profile-maintenance assumptions and snapshot dates.
- Treat benchmark scores as bounded by label quality.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) discusses ResearcherID profiles as human-based compilations while acknowledging that such compilations can contain erroneous records.
- The paper uses ResearcherID because it is valuable for evaluation, not because it is error-free.
- This motif captures an error floor in the benchmark labels themselves.

## Caveats

- Profile errors may be rare enough to leave algorithm rankings mostly unchanged.
- Human-curated profiles can outperform automatic IDs for many evaluation tasks.
- Error rates vary by researcher engagement, platform, field, and year.

## Links

- [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md)
- [identifier-covered evaluation denominator](identifier_covered_evaluation_denominator.md)
- [OpenAlex author ORCID coverage audit](openalex_author_orcid_coverage_audit.md)
- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `human_curated_profile_label_error_floor`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: human profile benchmark error; curated identifier label noise; ResearcherID label error floor
