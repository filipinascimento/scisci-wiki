# Contribution-statement equal-intensity problem

## Summary

Binary task claims do not reveal whether authors claiming the same task contributed equally or at different intensities.

## Canonical Form

- Unit of analysis: author-paper-task cell, contribution statement, task claim, intensity weight, author order, or credit share.
- Typical representation: task-claim matrix with unresolved within-task intensity weights.
- Mechanism, measurement, or validation target: granularity limit of contribution-statement credit allocation.
- Empirical signature: multiple authors can claim the same task while their relative intensity remains unidentified.

## Uses in Science of Science

- Refines contribution-statement validation by linking it to [author contribution statements](../datasets/author_contribution_statements.md) and [contribution role vectors](../representations/contribution_role_vectors.md).
- Useful as a reusable check when [author order contribution proxy limits](author_order_contribution_proxy_limits.md) is used in science-of-science inference.
- Creates cross-links to [contribution statement role granularity limit](contribution_statement_role_granularity_limit.md) so the motif is not interpreted in isolation.

## Operationalization

- Identify author-paper-task cells where multiple authors claim the same task.
- Compare unweighted task claims with author-order, fractional, or intensity-weighted alternatives.
- Report which conclusions depend on equal-intensity assumptions.

## Evidence and Validations

- Verified local full text from Robinson-Garcia et al. (2020) asks how to disentangle contribution when multiple authors claim the same tasks and whether their contributions should be treated as equal.
- The motif records a future-direction limitation rather than a solved empirical procedure.

## Caveats

- Contribution statements often lack intensity, timing, or quality information.
- Adding weights without evidence can introduce false precision.

## Links

- [Author contribution statements](../datasets/author_contribution_statements.md)
- [Contribution role vectors](../representations/contribution_role_vectors.md)
- [Author-order contribution-proxy limits](author_order_contribution_proxy_limits.md)
- [Contribution-statement role-granularity limit](contribution_statement_role_granularity_limit.md)
- [Collective credit allocation](../measures/collective_credit_allocation.md)
- [Authorship-mode contribution share](../measures/authorship_mode_contribution_share.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/eLife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]

## Metadata

- Concept ID: `contribution_statement_equal_intensity_problem`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: within-task contribution intensity; equal-contribution ambiguity; task-claim weighting problem
