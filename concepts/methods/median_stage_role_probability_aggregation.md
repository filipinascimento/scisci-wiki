# Median stage role-probability aggregation

## Summary

Median stage role-probability aggregation summarizes an author's predicted contribution roles within each career stage by taking the median predicted probability across that stage's publications.

## Canonical Form

- Unit of analysis: author, career stage, publication, contribution role, predicted probability, or number of contributions.
- Typical representation: author-stage role vector, median probability table, robust archetype input, or stage-specific contribution profile.
- Method target: reduce noisy author-paper role predictions to stable career-stage profiles.
- Empirical signature: each scientist receives one median probability per role and career stage, rather than a raw sequence of paper-level predictions.

## Uses in Science of Science

- Converts [contribution role vectors](../representations/contribution_role_vectors.md) into author-stage profiles.
- Feeds [robust archetypal contribution profiles](robust_archetypal_contribution_profiles.md).
- Works with [scientific-age career-stage bins](../representations/scientific_age_career_stage_bins.md).
- Reduces sensitivity to outlier publications before studying [contribution archetype career progression](../mechanisms/contribution_archetype_career_progression.md).

## Operationalization

- Predict contribution-role probabilities for each author-paper pair.
- Group each author's publications by career-stage bin.
- For each role and stage, take the median predicted probability across the author's publications.
- Apply the same aggregation to the predicted number of contributions when needed.
- Use the resulting author-stage vectors for archetype assignment, trajectory modeling, or demographic comparison.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) aggregates predicted contributorships at the individual level and by career stage.
- The authors choose median predicted contributorship of publications for each career stage to avoid the effect of contribution outliers.
- Their supplementary formula defines the stage-level role probability as the median over predicted probabilities for papers in that stage, and applies the same median rule to number of contributions.

## Caveats

- Median aggregation can hide rare but important leadership or specialist contributions.
- Authors with few papers in a stage can have unstable median profiles.
- The method depends on the accuracy and portability of the preceding role-prediction model.

## Links

- [contribution role vectors](../representations/contribution_role_vectors.md)
- [robust archetypal contribution profiles](robust_archetypal_contribution_profiles.md)
- [scientific-age career-stage bins](../representations/scientific_age_career_stage_bins.md)
- [prediction-error propagated archetype uncertainty](../validations/prediction_error_propagated_archetype_uncertainty.md)
- [contribution archetype career progression](../mechanisms/contribution_archetype_career_progression.md)
- [Bayesian contributorship imputation](bayesian_contributorship_imputation.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; SciSciNet: W3097159753; WoS: unknown]

## Metadata

- Concept ID: `median_stage_role_probability_aggregation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: median contributorship aggregation; author-stage role median; robust career-stage role profile; stage-level contribution probability median
