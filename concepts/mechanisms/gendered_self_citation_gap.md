# Gendered self-citation gap

## Summary

The gendered self-citation gap is the empirical pattern that men and women differ in how often they cite their own prior work, with consequences for visibility, cumulative advantage, and citation-based evaluation.

## Canonical Form

- Unit of analysis: author, paper, reference, field, year, career stage, or byline position.
- Typical representation: gender-stratified self-citation rate, self-citation odds ratio, or field/year-adjusted self-citation gap.
- Mechanism: self-promotion norms, gendered expectations, productivity histories, collaboration structure, and evaluation incentives can affect self-citation behavior.
- Empirical signature: persistent field-adjusted difference in self-citation rates by inferred or observed gender.

## Uses in Science of Science

- Extends [gender and race stratification](gender_race_stratification.md) from funding, topics, and citation reception to citation behavior.
- Links [self-citation rates](../measures/self_citation_rates.md) to [cumulative advantage](cumulative_advantage.md), because self-citations can contribute to early visibility and later attention.
- Helps evaluate whether citation-based career metrics should report self-citation-excluded variants when comparing across demographic groups.
- Provides a behavioral mechanism adjacent to [attention inequality](attention_inequality.md) and [reputation effects](reputation_effects.md).

## Operationalization

- Assign author gender with documented uncertainty and ethical caveats, or use self-reported gender when available; the proxy-construction layer is [name-based demographic inference](../methods/name_based_demographic_inference.md).
- Match each citing paper's authors to cited paper authors and flag references where at least one author overlaps.
- Use [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md) when multi-author fractional attribution is needed.
- Use [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md) when comparing gender groups by author-paper opportunity.
- Document whether self-citations were identified through [full-name self-citation matching](../methods/full_name_self_citation_matching.md) or richer disambiguation.
- Inspect [zero self-citation authorship share](../measures/zero_self_citation_authorship_share.md) to determine whether the gap is broad or tail-driven.
- Use [self-citation bootstrap ratio intervals](../methods/self_citation_bootstrap_ratio_intervals.md) and field-specific estimates before treating subgroup ratios as stable.
- Estimate self-citation rates within fields, years, authorship positions, and team-size strata.
- Check [self-citation team-size denominator effect](../validations/self_citation_team_size_denominator_effect.md) and [SSRN self-citation replication check](../validations/ssrn_self_citation_replication_check.md) for denominator and corpus robustness.
- Add validation pages for [self-citation opportunity-set confound](../validations/self_citation_opportunity_set_confound.md), [field gender-composition self-citation threshold check](../validations/field_gender_composition_self_citation_threshold_check.md), [outgoing self-citation metric boundary](../validations/outgoing_self_citation_metric_boundary.md), and [self-citation equity-intervention backlash risk](../validations/self_citation_equity_intervention_backlash_risk.md) before treating the gap as a simple behavior or policy prescription.
- Compare raw rates with adjusted or bootstrapped estimates, and report sensitivity to gender-inference coverage.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) analyzes 1.5 million JSTOR papers and assigns gender to 2.8 million authors using first names.
- The extracted text reports that nearly 10% of references are self-citations and that men cited their own papers 56% more than women over 1779-2011.
- King et al. report that in the last two decades of their data, men self-cited 70% more than women, and women were more than 10 percentage points more likely not to cite their own previous work at all.
- The paper reports that the gender gap remained stable over the last 50 years in its data despite increased representation of women in academia.
- The mechanism is not asserted as pure gender preference: the paper discusses productivity histories, field composition, self-promotion norms, and the mechanical contribution of self-citation to cumulative advantage.
- The same full text shows that women are more likely to have zero self-citations in a focal authorship, that rates vary across fields and subfields, and that an SSRN replication reproduces the aggregate gap while complicating equal-paper-count interpretation.
- A later split from the same verified text isolates opportunity-set confounding, field-composition threshold checks, JSTOR moving-wall artifacts, outgoing-versus-incoming metric boundaries, and intervention-backlash risks as separate validation motifs.
- A residual King et al. pass adds [self-citation mechanism portfolio boundary](../validations/self_citation_mechanism_portfolio_boundary.md), [evaluation pressure self-citation intensification](evaluation_pressure_self_citation_intensification.md), [generalized self-promotion sanction channel](generalized_self_promotion_sanction_channel.md), and [self-citation-adjusted cumulative-advantage metric design](../methods/self_citation_adjusted_cumulative_advantage_metric_design.md).

## Caveats

- Name-based gender inference is incomplete, binary, culturally uneven, and potentially harmful if used without care.
- Self-citation differences may reflect publication volume, collaboration composition, field norms, career stage, or byline role as well as behavioral norms.
- A self-citation gap is not a complete explanation for gendered citation inequalities.
- Reporting should avoid treating lower self-citation as a deficit or higher self-citation as misconduct.

## Links

- [gender and race stratification](gender_race_stratification.md)
- [name-based demographic inference](../methods/name_based_demographic_inference.md)
- [intersectional topic stratification](intersectional_topic_stratification.md)
- [self-citation rates](../measures/self_citation_rates.md)
- [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md)
- [zero self-citation authorship share](../measures/zero_self_citation_authorship_share.md)
- [self-citation bootstrap ratio intervals](../methods/self_citation_bootstrap_ratio_intervals.md)
- [self-citation team-size denominator effect](../validations/self_citation_team_size_denominator_effect.md)
- [SSRN self-citation replication check](../validations/ssrn_self_citation_replication_check.md)
- [self-citation opportunity-set confound](../validations/self_citation_opportunity_set_confound.md)
- [field gender-composition self-citation threshold check](../validations/field_gender_composition_self_citation_threshold_check.md)
- [outgoing self-citation metric boundary](../validations/outgoing_self_citation_metric_boundary.md)
- [self-citation equity-intervention backlash risk](../validations/self_citation_equity_intervention_backlash_risk.md)
- [self-citation mechanism portfolio boundary](../validations/self_citation_mechanism_portfolio_boundary.md)
- [evaluation pressure self-citation intensification](evaluation_pressure_self_citation_intensification.md)
- [generalized self-promotion sanction channel](generalized_self_promotion_sanction_channel.md)
- [self-citation-adjusted cumulative-advantage metric design](../methods/self_citation_adjusted_cumulative_advantage_metric_design.md)
- [subfield self-citation ratio heterogeneity](../measures/subfield_self_citation_ratio_heterogeneity.md)
- [JSTOR blackout-window time-series artifact](../validations/jstor_blackout_window_time_series_artifact.md)
- [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md)
- [full-name self-citation matching](../methods/full_name_self_citation_matching.md)
- [JSTOR network dataset](../datasets/jstor_network_dataset.md)
- [hierarchical map-equation field classification](../methods/hierarchical_map_equation_field_classification.md)
- [self-citation cumulative amplification](self_citation_cumulative_amplification.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [cumulative advantage](cumulative_advantage.md)
- [attention inequality](attention_inequality.md)
- [reputation effects](reputation_effects.md)
- [scientific career impact](scientific_career_impact.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]
- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `gendered_self_citation_gap`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: gender self-citation gap; gendered citation self-promotion; self-citation inequality
