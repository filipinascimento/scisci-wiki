# Faculty-placement pedigree baseline

## Summary

Faculty-placement pedigree baseline is the validation baseline that faculty hiring outcomes may be predicted only modestly better than by knowing a scholar's doctoral institution or academic pedigree.

## Canonical Form

- Unit of analysis: faculty candidate, doctoral institution, hiring institution, field, cohort, or placement model.
- Typical representation: baseline model using doctoral pedigree, compared with richer models including productivity, postdoctoral training, geography, gender, and other features.
- Validation target: determine whether complex placement models add predictive value beyond institutional pedigree.
- Empirical signature: candidate-level placement forecasts improve only slightly after adding early-career or demographic/career features to pedigree.

## Uses in Science of Science

- Refines [faculty placement predictive validity](faculty_placement_predictive_validity.md) by separating rank-signal validity from candidate-level predictability.
- Links [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md) to prediction limits: prestige can structure placements without fully determining them.
- Provides a task-specific warning in the [SciSci prediction domain map](../methods/scisci_prediction_domain_map.md).
- Supports [automated predictive-evaluation safeguards](automated_predictive_evaluation_safeguards.md) when hiring prediction models use pedigree-sensitive features.

## Operationalization

- Build a doctoral-pedigree-only baseline for faculty placement.
- Add candidate features such as publications, early citations, postdoctoral training, geography, gender where appropriate, topic, and field demand.
- Compare predictive gain against the baseline with out-of-sample validation.
- Audit subgroup calibration and whether pedigree functions as a proxy for structural advantage.

## Evidence and Validations

- Verified full-text evidence from Clauset, Larremore, and Sinatra (2017) states that 85% of new faculty move from doctoral programs down the institutional prestige hierarchy.
- The same paper reports that faculty placement remains remarkably unpredictable and that models using available data on early-career productivity, postdoctoral training, geography, gender, and more make barely better predictions than simply knowing academic pedigree.
- Clauset et al. suggest that improved prediction may require different, less-accessible data, or that placement depends on latent factors that are difficult or impossible to measure.

## Caveats

- A strong pedigree baseline is not a causal proof that pedigree should drive hiring decisions.
- Pedigree can proxy training resources, networks, field specialization, prestige bias, geography, and unequal opportunity.
- Better predictive performance can worsen fairness or diversity if used directly in hiring or funding decisions.

## Links

- [faculty placement predictive validity](faculty_placement_predictive_validity.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md)
- [SciSci prediction domain map](../methods/scisci_prediction_domain_map.md)
- [automated predictive-evaluation safeguards](automated_predictive_evaluation_safeguards.md)
- [prediction feedback loops](prediction_feedback_loops.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Clauset, A., Larremore, D. B., & Sinatra, R. (2017). Data-driven predictions in the science of science. *Science*, 355(6324), 477-480. https://doi.org/10.1126/science.aal4217 [OpenAlex: W2585057539; Dimensions: pub.1083524092; WoS: unknown]

## Metadata

- Concept ID: `faculty_placement_pedigree_baseline`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2017) (2017)
- Latest seen paper: Clauset et al. (2017) (2017)
- Primary reference DOI: `10.1126/science.aal4217`
- OpenAlex ID: `W2585057539`
- Dimensions ID: `pub.1083524092`
- SciSciNet ID: `W2585057539`
- Aliases: academic pedigree baseline; doctoral prestige placement baseline; faculty hiring pedigree model; placement prediction pedigree baseline
