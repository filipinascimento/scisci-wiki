# m-quotient

## Summary

The m-quotient divides a scholar's h-index by scientific age, turning a cumulative h-index into an approximate career-rate measure.

## Canonical Form

- Unit of analysis: individual researcher, career stage, cohort, field, or evaluation portfolio.
- Typical representation: m = h / n, where n is years since first publication or another stated career-start date.
- Mechanism or measurement target: seniority-adjusted accumulation rate of broadly cited publications.
- Empirical signature: two scholars with similar h-index values can have different m-quotients if their scientific ages differ.

## Uses in Science of Science

- Adds a career-stage adjustment to [h-index](h_index.md).
- Connects author-level evaluation to [scientific career impact dynamics](../mechanisms/scientific_career_impact.md), productivity, and cumulative advantage.
- Provides a simple benchmark for comparing researchers of different seniority, while making career-start assumptions explicit.
- Requires [career-spanning citation-source coverage](../methods/career_spanning_citation_source_coverage.md), because database start dates and missing early records affect scientific-age normalization.
- Supports [h-index seniority benchmarks](h_index_seniority_benchmarks.md) and [recognition-cohort h-index validation](../validations/recognition_cohort_h_index_validation.md).
- Serves as a historical precursor to richer models such as [Q-model career impact prediction](../methods/q_model_career_prediction.md).

## Operationalization

- Compute h-index from an author-disambiguated publication and citation record.
- Define scientific age n, usually years since first publication, but document any delayed career-start convention.
- Calculate m = h / n at a stated census date.
- Report field, database, self-citation treatment, and career interruptions or nonstandard starts.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) derives a roughly linear relation h = mn for scientists who produce papers of similar quality at a steady rate over their careers.
- Hirsch states that the slope m should be a useful yardstick for comparing scientists of different seniority.
- The paper reports empirical m values for prominent physicists and gives interpretive benchmarks, while also warning that m becomes less useful when productivity is not maintained.
- Hirsch notes that the first publication may not always be the appropriate start date for scientific age if it precedes sustained productivity.
- Hirsch's discussion of productivity slowdown and post-publication h-index lag is split out as [h-index monotonicity and h-core turnover](../validations/h_index_monotonicity_turnover.md).

## Caveats

- m-quotient can penalize interrupted careers, field switching, part-time work, and delayed recognition.
- The chosen scientific-age start date is consequential and can be hard to standardize.
- Like h-index, m-quotient remains field-, database-, authorship-, and self-citation-sensitive.

## Links

- [h-index](h_index.md)
- [h-core publication set](../representations/h_core_publication_set.md)
- [group h-index](group_h_index.md)
- [h-index self-citation sensitivity](../validations/h_index_self_citation_sensitivity.md)
- [h-index monotonicity and h-core turnover](../validations/h_index_monotonicity_turnover.md)
- [h-index seniority benchmarks](h_index_seniority_benchmarks.md)
- [recognition-cohort h-index validation](../validations/recognition_cohort_h_index_validation.md)
- [h-index field-scale caveat](../validations/h_index_field_scale_caveat.md)
- [career-spanning citation-source coverage](../methods/career_spanning_citation_source_coverage.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [individual Q parameter](individual_q_parameter.md)
- [field-normalized h-index](field_normalized_h_index.md)
- [responsible metrics](responsible_metrics.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]

## Metadata

- Concept ID: `m_quotient`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: m-index; Hirsch m quotient; h-index per career year; scientific-age-normalized h-index
