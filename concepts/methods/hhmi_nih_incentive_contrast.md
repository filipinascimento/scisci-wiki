# HHMI-NIH incentive contrast

## Summary

The HHMI-NIH incentive contrast is a funding-design comparison that treats HHMI investigator awards and NIH R01-style project grants as different incentive regimes for scientific exploration.

## Canonical Form

- Unit of analysis: scientist, funding program, grant contract, appointment cycle, review process, or research portfolio.
- Typical representation: program-feature contrast across duration, renewal tolerance, feedback depth, unit of selection, and resource flexibility.
- Method target: isolate funding-contract features that may shift researchers from exploitation toward exploration.
- Empirical signature: person-centered, long-horizon funding is compared with project-centered, shorter-cycle funding while holding scientist quality and field as comparable as possible.

## Uses in Science of Science

- Provides the design backbone for [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md).
- Separates incentive design from generic funding amount, prestige, and peer-review selection.
- Supplies a reusable template for comparing investigator awards, project grants, block grants, fellowships, and high-risk programs.
- Links naturally to outcome measures such as [vintage-specific citation-tail output](../measures/vintage_specific_citation_tail_output.md), [self-benchmark hit/flop rates](../measures/self_benchmark_hit_flop_rates.md), [MeSH keyword trajectory shift](../measures/mesh_keyword_trajectory_shift.md), and [citing-journal diversity index](../measures/citing_journal_diversity_index.md).
- Splits program-process details into [review-feedback exploration scaffold](../mechanisms/review_feedback_exploration_scaffold.md), [selected-output portfolio review](selected_output_portfolio_review.md), [trainee explorer sorting](../validations/trainee_explorer_sorting.md), and [appointment-status ascription check](../validations/appointment_status_ascription_check.md).

## Operationalization

- Code each program's unit of selection: person, project, lab, institution, or portfolio.
- Record award duration, renewal cycle, tolerance for early failure, phase-down rules, feedback depth, and ability to reallocate resources.
- Compare funded scientists with controls drawn from similar fields, career stages, institutions, and prior achievements.
- Use [propensity-score weighted program evaluation](propensity_score_weighted_program_evaluation.md), [common-support program comparison](../validations/common_support_program_comparison.md), and [semiparametric difference-in-differences](semiparametric_difference_in_differences.md) when assignment is selective.
- Test whether estimated effects remain after accounting for prestige, additional resources, peer effects, trainee sorting, and baseline performance.
- Track grant-application behavior, conditional NIH scores, delayed retooling, and per-dollar output when interpreting the contrast.

## Evidence and Validations

- Verified full-text evidence from Azoulay, Graff Zivin, and Manso (2009) contrasts HHMI investigator awards with NIH R01 funding.
- The paper describes HHMI as long-horizon, tolerant of early failure, rich in feedback, and organized around selecting people rather than pre-specified projects.
- The same text describes NIH R01 funding as project-centered, shorter-cycle, tied to predefined deliverables, and less forgiving of failure at renewal.
- The renewal-process contrast includes selected-output review packets and high-touch expert feedback, while the interpretation audit includes trainee sorting and status-ascription checks.
- Azoulay et al. use the contrast to estimate whether funding incentives affect both the rate and direction of scientific exploration.
- They also use the contrast to show reduced R01 application volume among HHMI investigators, harsher conditional NIH scores, delayed output divergence, and caveats about whether the HHMI model can be scaled.

## Caveats

- HHMI appointment is highly selective, so the contrast is not randomized.
- Program prestige, added resources, peer networks, and trainee sorting can mimic or amplify incentive effects.
- The contrast may not generalize to lower-resource programs or to scientists outside elite life-science institutions.
- The private-foundation setting changes both eligibility and political constraints, so the contrast should not be translated into public funding policy without a scalability check.

## Links

- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md)
- [protected funding application substitution](../measures/protected_funding_application_substitution.md)
- [exploration retooling lag](../mechanisms/exploration_retooling_lag.md)
- [creative-output productivity ambiguity](../validations/creative_output_productivity_ambiguity.md)
- [high-touch funding scalability boundary](../validations/high_touch_funding_scalability_boundary.md)
- [early-career prize control group](early_career_prize_control_group.md)
- [propensity-score weighted program evaluation](propensity_score_weighted_program_evaluation.md)
- [common-support program comparison](../validations/common_support_program_comparison.md)
- [semiparametric difference-in-differences](semiparametric_difference_in_differences.md)
- [renewal-sensitivity incentive validation](../validations/renewal_sensitivity_incentive_validation.md)
- [funding-program alternative-mechanism audit](../validations/funding_program_alternative_mechanism_audit.md)
- [vintage-specific citation-tail output](../measures/vintage_specific_citation_tail_output.md)
- [self-benchmark hit/flop rates](../measures/self_benchmark_hit_flop_rates.md)
- [MeSH keyword trajectory shift](../measures/mesh_keyword_trajectory_shift.md)
- [citing-journal diversity index](../measures/citing_journal_diversity_index.md)
- [review-feedback exploration scaffold](../mechanisms/review_feedback_exploration_scaffold.md)
- [selected-output portfolio review](selected_output_portfolio_review.md)
- [trainee explorer sorting](../validations/trainee_explorer_sorting.md)
- [appointment-status ascription check](../validations/appointment_status_ascription_check.md)

## References

- Azoulay, P., Graff Zivin, J. S., & Manso, G. (2009). Incentives and creativity: Evidence from the academic life sciences. *NBER Working Paper Series*, No. 15466. https://doi.org/10.3386/w15466 [OpenAlex: W3024332105; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `hhmi_nih_incentive_contrast`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2009) (2009)
- Latest seen paper: Azoulay et al. (2009) (2009)
- Primary reference DOI: `10.3386/w15466`
- OpenAlex ID: `W3024332105`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: HHMI versus NIH contrast; investigator versus project funding contrast; people-not-projects comparison; exploration incentive contrast
