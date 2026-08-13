# Peer-review hit-miss asymmetry

## Summary

Peer-review hit-miss asymmetry is the validation pattern where review scores predict high-impact grant outputs more clearly than they screen out low-citation outputs.

## Canonical Form

- Unit of analysis: funded grant, percentile score, citation-percentile bin, hit publication, low-citation publication, or residual outcome.
- Typical representation: score-gradient curves for top-tail and bottom-tail publication counts.
- Validation target: determine whether review panels add more value by identifying exceptional upside than by eliminating weak outputs.
- Empirical signature: better scores predict more top-tail publications, while low-citation or bottom-bin outputs show weak or no negative screening gradient.

## Uses in Science of Science

- Refines [grant peer-review value-added](grant_peer_review_value_added.md) by separating average output prediction from tail-specific prediction.
- Links [grant hit-publication tail](../measures/grant_hit_publication_tail.md) to a downside-screening test.
- Helps evaluate whether a funding system rewards high-risk/high-upside ideas, safe productivity, or mainly observable applicant histories.
- Supports policy experiments that compare peer review, lotteries, portfolio funding, and novelty-aware review on upside versus downside performance.

## Operationalization

- Link funded grants to publications and field/year citation percentiles.
- Construct top-tail counts, such as top 0.1%, 1%, or 5% publications, and low-tail counts, such as bottom 50% or bottom 20% publications.
- Residualize outcomes with field, cohort, study-section, institute, applicant-history, career, grant-history, institution, and demographic controls.
- Smooth or regress residual outcomes against review percentile scores separately for hit and low-citation bins.
- Interpret asymmetry within the sampling frame, especially if only funded grants are observed.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) reports that peer-review scores have especially strong predictive value for hit publications.
- The paper states that a one-standard-deviation worse NIH percentile score predicts 22.1%, 19.1%, and 16.0% reductions in top 0.1%, top 1%, and top 5% publications.
- Li and Agha's nonparametric residual analysis finds the steepest score gradients among the most highly reviewed applications.
- The same full text reports no evidence that the peer-review system adds value beyond prior publications and qualifications in screening out bottom-citation publications among funded grants.

## Caveats

- Bottom-tail publication counts can reflect ordinary project outputs, data papers, negative results, or field citation norms rather than failure.
- The funded-only sample cannot show how well reviewers screen out all unfunded weak proposals.
- Tail bins are sparse, so estimates can be sensitive to citation window, field normalization, and grant-output linkage.
- Hit identification by citations does not fully capture social value, clinical value, or knowledge infrastructure.

## Links

- [grant peer-review value-added](grant_peer_review_value_added.md)
- [grant hit-publication tail](../measures/grant_hit_publication_tail.md)
- [residual review-score response curve](residual_review_score_response_curve.md)
- [funded-only peer-review validation](funded_only_peer_review_validation.md)
- [study-section-year fixed-effect identification](../methods/study_section_year_fixed_effect_identification.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]

## Metadata

- Concept ID: `peer_review_hit_miss_asymmetry`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: hit-versus-miss peer-review asymmetry; peer-review upside screening; grant-review low-tail screening gap; hit publication screening asymmetry
