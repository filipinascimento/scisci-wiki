# Residual review-score response curve

## Summary

Residual review-score response curve visualizes whether review scores predict unexplained future outcomes after applicant, field, and cohort factors have been residualized out.

## Canonical Form

- Unit of analysis: funded grant, proposal score, residual publication count, residual citation count, or score bin.
- Typical representation: locally weighted or nonparametric curve of residual outcomes against review percentile.
- Validation target: determine where in the score distribution expert review adds the most predictive information.
- Empirical signature: better scores align with higher residual outcomes, especially among highly ranked applications.

## Uses in Science of Science

- Gives a nonlinear diagnostic for [grant peer-review value-added](grant_peer_review_value_added.md).
- Pairs with [applicant prestige-residualization stack](applicant_prestige_residualization_stack.md) by showing the post-control score gradient instead of only reporting coefficients.
- Helps identify whether peer review detects exceptional proposals, screens weak ones, or mainly ranks the middle of the distribution.
- Supports [responsible metrics](../measures/responsible_metrics.md) by making score-performance relationships visible rather than assuming linearity.

## Operationalization

- Regress future outcomes on applicant, field, fiscal-year, study-section, institute, and institutional covariates while excluding the review score.
- Save residual publications, citations, hit-publication counts, or other outcome residuals.
- Smooth residual outcomes against the review percentile using local linear or related nonparametric methods.
- Inspect whether slopes differ among top-scored, middle-scored, and poorly scored funded applications.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) constructs residuals from models with the full Model 6 control set, excluding the percentile score itself.
- The paper then uses locally weighted, linearly smoothed scatterplots to relate peer-review score to residual citations and publications.
- Li and Agha report that for percentile scores below 50, worse scores are associated with lower expected residual publications and citations.
- The relationship is especially steep among very low percentile scores, suggesting strong discrimination among highly reviewed applications.
- The same residual-curve workflow supports [peer-review hit-miss asymmetry](peer_review_hit_miss_asymmetry.md), where hit-publication gradients are stronger than low-citation screening gradients.

## Caveats

- Residual curves inherit the assumptions and omissions of the first-stage control model.
- Smoothing choices can change apparent local slopes, especially in sparse score regions.
- A residual score curve among funded grants still cannot observe the full distribution of rejected proposals.

## Links

- [grant peer-review value-added](grant_peer_review_value_added.md)
- [applicant prestige-residualization stack](applicant_prestige_residualization_stack.md)
- [funded-only peer-review validation](funded_only_peer_review_validation.md)
- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [out-of-order funded grant exception](out_of_order_funded_grant_exception.md)
- [grant hit-publication tail](../measures/grant_hit_publication_tail.md)
- [peer-review hit-miss asymmetry](peer_review_hit_miss_asymmetry.md)
- [study-section-year fixed-effect identification](../methods/study_section_year_fixed_effect_identification.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]

## Metadata

- Concept ID: `residual_review_score_response_curve`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: residual score curve; peer-review response curve; score-outcome residual plot; nonparametric review-score validation
