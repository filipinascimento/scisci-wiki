# Author-cohort repeat-publication propensity

## Summary

Author-cohort repeat-publication propensity measures whether authors' probability of publishing again varies by first-publication cohort, recency, or career age rather than remaining stationary.

## Canonical Form

- Unit of analysis: author, first-publication cohort, career age, publication event, or repeat-publication hazard.
- Typical representation: repeat-author probability, cohort-specific return rate, recency-dependent hazard, or career-age return function.
- Measure target: capture temporal heterogeneity in author return behavior for team-formation models.
- Empirical signature: authors who entered the corpus more recently have different repeat-publication probabilities than earlier cohorts.

## Uses in Science of Science

- Refines [lead-author team choice model](../methods/lead_author_team_choice_model.md).
- Adds cohort structure to [core team retention assumption](../validations/core_team_retention_assumption.md).
- Helps interpret [authorship mode parameter trajectories](authorship_mode_parameter_trajectories.md) over long windows.

## Operationalization

- Estimate repeat-publication hazards by first-publication cohort and career age.
- Compare static and cohort-varying return parameters in team-size simulations.
- Separate retirement, inactivity, and source-entry effects when possible.
- Report sensitivity to author disambiguation and observation windows.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) notes that repeat publications are more likely for authors who started publishing more recently in the model specification.
- This creates a cohort-sensitive repeat-publication process rather than a single stationary return probability.

## Caveats

- Cohort effects can confound career aging, database entry, retirement, and field growth.
- Author disambiguation errors can distort repeat-publication hazards.
- The measure is model-facing and may not generalize across fields without recalibration.

## Links

- [lead-author team choice model](../methods/lead_author_team_choice_model.md)
- [core team retention assumption](../validations/core_team_retention_assumption.md)
- [authorship mode parameter trajectories](authorship_mode_parameter_trajectories.md)
- [inactive agent turnover rule](../methods/inactive_agent_turnover_rule.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown]

## Metadata

- Concept ID: `author_cohort_repeat_publication_propensity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: cohort-specific author return rate; repeat-publication hazard; recency-dependent author propensity
