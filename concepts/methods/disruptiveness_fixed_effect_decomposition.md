# Disruptiveness fixed-effect decomposition

## Summary

Disruptiveness fixed-effect decomposition separates how much variation in disruption scores is attributable to field, year, and author or inventor factors.

## Canonical Form

- Unit of analysis: author-year, inventor-year, field-year, paper, patent, or disruption-score observation.
- Typical representation: fixed-effect regression, adjusted R-squared decomposition, Shapley-Owen contribution plot, or field-year-author variance attribution.
- Method target: determine whether disruption trends are mostly field-specific, time-specific, or tied to stable differences across people.
- Empirical signature: field effects explain little of the disruption trend relative to author or inventor and year effects.

## Uses in Science of Science

- Provides a robustness and mechanism-discovery layer for [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md).
- Tests whether [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md) is a broad system-level pattern or a field-specific artifact.
- Complements [disruptiveness practice-control stack](../validations/disruptiveness_practice_control_stack.md), which adjusts for changing output volume, reference-list length, and authorship or inventor-team size.
- Complements [citation network rewiring nulls](citation_network_rewiring_nulls.md) by decomposing observed variation instead of simulating null citation networks.
- Helps separate field mix from researcher-cohort, inventor-cohort, policy, and institutional changes.

## Operationalization

- Compute a disruption score such as CD5 for papers or patents.
- Specify regression models with field, year, and author or inventor fixed effects.
- Use adjusted R-squared or another model-fit statistic to quantify predictive power.
- Apply Shapley-Owen or related decomposition to assign relative contribution to each fixed-effect group.
- Compare papers and patents separately because field and year effects can differ across science and technology.

## Evidence and Validations

- Verified full-text evidence from Park et al. (2023) decomposes the relative contribution of field, year, and author or inventor fixed effects to models of CD index variation.
- The paper uses author-year or inventor-year as the unit of observation and granular subfields for field fixed effects.
- Park et al. report that field-specific factors make the lowest relative contribution to adjusted R-squared for both papers and patents.
- The paper reports larger contributions from author or inventor fixed effects and argues that stable individual-level factors may be important for understanding changes in disruptiveness over time.
- The same analysis supports the claim that the disruption decline is not simply a domain-specific field-composition artifact.

## Caveats

- Fixed effects attribute variation but do not by themselves identify causal mechanisms.
- Author or inventor effects can bundle cohort, institution, team, topic, and training differences.
- Decomposition results depend on the chosen model, observation unit, field taxonomy, and available disambiguation.

## Links

- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [disruption index](../measures/disruption_index.md)
- [citation network rewiring nulls](citation_network_rewiring_nulls.md)
- [disruptiveness practice-control stack](../validations/disruptiveness_practice_control_stack.md)
- [field classifications](../measures/field_classifications.md)
- [author name disambiguation](author_name_disambiguation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `disruptiveness_fixed_effect_decomposition`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: field-year-author disruption decomposition; Shapley-Owen disruption decomposition; CD5 fixed-effect attribution; disruption variance decomposition
