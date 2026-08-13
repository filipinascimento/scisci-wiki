# Recognition-cohort h-index validation

## Summary

Recognition-cohort h-index validation compares h-index and m-quotient distributions for externally recognized groups such as Nobel laureates or academy members.

## Canonical Form

- Unit of analysis: recognized cohort, field, award group, academy membership class, or comparison population.
- Typical representation: cohort distribution of h-index and m-quotient values, with means, medians, ranges, and selection rules.
- Validation target: whether h-index values align with independent signals of recognized scientific achievement.
- Empirical signature: highly recognized cohorts show substantial h-index values but also variance, lag, and field-specific scale differences.

## Uses in Science of Science

- Provides an external face-validity check for [h-index](../measures/h_index.md) and [m-quotient](../measures/m_quotient.md).
- Shows why evaluation metrics should be interpreted alongside delayed recognition and prize-selection timing.
- Connects author metrics to [responsible metrics](../measures/responsible_metrics.md), [reputation effects](../mechanisms/reputation_effects.md), and [recognition-visibility coupling](../mechanisms/recognition_visibility_coupling.md).
- Helps separate metric validation against recognition from metric use as a decision rule.

## Operationalization

- Define a recognized cohort and inclusion rules, including name-disambiguation exclusions.
- Compute h-index and m-quotient from a specified citation database and census date.
- Compare cohort distributions with relevant field and career-stage baselines.
- Inspect outliers where recognized scientists have low h, high h, or low m because of delayed awards, common names, field scale, or career timing.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) computes h and m for physicists who received Nobel prizes in the previous 20 years, restricting the sample to names that uniquely identify scientists in the citation index.
- Hirsch reports that most Nobel-prize physicists in that sample have substantial h values, while many have modest m values because prizes are often awarded long after peak productivity.
- The paper also compares newly elected and existing National Academy of Sciences physics cohorts and treats the results as evidence that h is a stable estimator of scientific achievement.

## Caveats

- Prize and academy cohorts are themselves biased by field, seniority, geography, gender, institution, and recognition dynamics.
- Recognition lag can make m-quotient values look low even for historically important scientists.
- Validation against elite recognition does not prove suitability for early-career, interdisciplinary, or underrepresented researchers.

## Links

- [h-index](../measures/h_index.md)
- [m-quotient](../measures/m_quotient.md)
- [h-index seniority benchmarks](../measures/h_index_seniority_benchmarks.md)
- [h-index field-scale caveat](h_index_field_scale_caveat.md)
- [reputation effects](../mechanisms/reputation_effects.md)
- [recognition-visibility coupling](../mechanisms/recognition_visibility_coupling.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]

## Metadata

- Concept ID: `recognition_cohort_h_index_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: Nobel h-index validation; academy-member h-index validation; recognition cohort metric check; elite-cohort h-index comparison
