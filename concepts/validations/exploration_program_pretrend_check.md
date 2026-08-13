# Exploration-program pretrend check

## Summary

Exploration-program pretrend check validates whether treated and comparison scientists follow similar outcome trajectories before a funding or recognition program begins.

## Canonical Form

- Unit of analysis: scientist-year, institution-year, field-year, grant-program cohort, or event-time panel.
- Typical representation: pre-treatment event-study plot, weighted treated-control trajectories, parallel-trends diagnostic, or placebo pre-period coefficient.
- Validation target: assess whether post-treatment divergence is plausible evidence of a program effect rather than continuation of earlier trends.
- Empirical signature: treated and weighted comparison units track closely before treatment, then diverge after a plausible lag.

## Uses in Science of Science

- Supports [semiparametric difference-in-differences](../methods/semiparametric_difference_in_differences.md) and other panel designs.
- Helps interpret funding, hiring, mobility, and prize interventions where elite scientists are selected after strong recent performance.
- Provides a graphical and statistical companion to [common-support program comparison](common_support_program_comparison.md).

## Operationalization

- Choose an event time such as award appointment, funding cutoff, policy adoption, or scientist death.
- Construct treated and weighted comparison trajectories for pre-treatment outcomes.
- Check whether levels, slopes, or shocks differ before treatment.
- Repeat for the main outcome and important mechanism measures, such as topic novelty, citation-tail output, and funding applications.
- Treat post-treatment effects cautiously when pretrends are visible or when controls briefly outpace treated units for theoretical reasons.

## Evidence and Validations

- Verified full-text evidence from Azoulay et al. (2009) shows weighted output paths for HHMI investigators and early-career prize controls before and after HHMI appointment.
- The paper states that parallel pre-appointment output trends are a necessary condition for the plausibility of the semi-parametric difference-in-differences exercise.
- Azoulay et al. report that treated and weighted control scientists track closely before appointment.
- They also note that divergence appears only several years after appointment, consistent with exploration incentives producing slower and more variable returns.
- That delayed divergence is a direct validation cue for [exploration retooling lag](../mechanisms/exploration_retooling_lag.md), because early post-treatment windows may miss the mechanism.

## Caveats

- Parallel pretrends do not rule out future time-varying unobserved selection.
- Sparse elite-scientist samples can make pretrend tests underpowered.
- If treatment has anticipation effects, the apparent pre-period may already be affected by the program.

## Links

- [semiparametric difference-in-differences](../methods/semiparametric_difference_in_differences.md)
- [propensity-score weighted program evaluation](../methods/propensity_score_weighted_program_evaluation.md)
- [common-support program comparison](common_support_program_comparison.md)
- [HHMI-NIH incentive contrast](../methods/hhmi_nih_incentive_contrast.md)
- [exploration retooling lag](../mechanisms/exploration_retooling_lag.md)
- [vintage-specific citation-tail output](../measures/vintage_specific_citation_tail_output.md)
- [MeSH keyword trajectory shift](../measures/mesh_keyword_trajectory_shift.md)
- [mortality-event pretrend validation](mortality_event_pretrend_validation.md)

## References

- Azoulay, P., Graff Zivin, J. S., & Manso, G. (2009). Incentives and creativity: Evidence from the academic life sciences. *NBER Working Paper Series*, No. 15466. https://doi.org/10.3386/w15466 [OpenAlex: W3024332105; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `exploration_program_pretrend_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2009) (2009)
- Latest seen paper: Azoulay et al. (2009) (2009)
- Primary reference DOI: `10.3386/w15466`
- OpenAlex ID: `W3024332105`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: program pretrend validation; weighted output trajectory check; exploration incentive pretrend; parallel-trends funding check
