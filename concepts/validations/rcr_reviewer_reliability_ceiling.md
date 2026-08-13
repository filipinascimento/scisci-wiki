# RCR reviewer reliability ceiling

## Summary

RCR reviewer reliability ceiling compares metric-expert agreement against inter-reviewer agreement so weak expert-score correlations are interpreted against the reliability of the human benchmark.

## Canonical Form

- Unit of analysis: article, expert reviewer score, RCR value, reviewer subset, or validation dataset.
- Typical representation: metric-reviewer correlation, reviewer-reviewer resampling distribution, and reliability ceiling.
- Validation target: whether a bibliometric measure approximates expert judgment as well as experts agree with one another.
- Empirical signature: metric-reviewer correlation is judged relative to the correlation between one reviewer and the mean of other reviewers.

## Uses in Science of Science

- Refines [RCR expert validation](rcr_expert_validation.md).
- Connects article-level metric validation to [expert-review aggregation limit](expert_review_aggregation_limit.md).
- Provides a bibliometric instance of [noisy-signal peer-review null](noisy_signal_peer_review_null.md).
- Links metric validation to [peer review gatekeeping](../mechanisms/peer_review_gatekeeping.md) because expert scores are themselves noisy.

## Operationalization

- Collect multiple independent expert scores for the same article set.
- Estimate the correlation between RCR and aggregate expert score.
- Resample reviewers by comparing one reviewer with the mean of other reviewers.
- Use the inter-reviewer distribution as a ceiling or reference band for metric-expert agreement.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) compares RCR with three independent sets of postpublication expert evaluations.
- The paper reports supplemental resampling in which one reviewer score is correlated with the mean of the other reviewer scores.
- Hutchins et al. use this comparison to show that internal correlations of expert scores are similar to correlations between RCR and review scores.

## Caveats

- Reviewer-score reliability depends on article set, scoring rubric, reviewer expertise, and number of reviewers.
- A metric matching noisy reviewer agreement is not proof that the metric measures quality.
- Reliability ceilings should not replace construct validation of what reviewers were asked to assess.

## Links

- [RCR expert validation](rcr_expert_validation.md)
- [expert-review aggregation limit](expert_review_aggregation_limit.md)
- [noisy-signal peer-review null](noisy_signal_peer_review_null.md)
- [peer review gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [Relative Citation Ratio](../measures/relative_citation_ratio.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; SciSciNet: W2953304564; WoS: unknown]

## Metadata

- Concept ID: `rcr_reviewer_reliability_ceiling`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: RCR expert reliability ceiling; reviewer-reviewer metric ceiling; expert-score reliability benchmark; RCR reviewer agreement ceiling
