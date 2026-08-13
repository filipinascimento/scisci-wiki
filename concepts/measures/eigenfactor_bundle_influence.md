# Eigenfactor bundle influence

## Summary

Eigenfactor bundle influence measures the total recursive citation influence of a journal set by summing the Eigenfactor Scores of all journals in the bundle.

## Canonical Form

- Unit of analysis: journal bundle, library collection, publisher package, field set, or journal portfolio.
- Typical representation: summed Eigenfactor Score, bundle Eigenfactor share, collection visit share, or package influence.
- Measurement target: total influence covered by a group of journals.
- Empirical signature: a bundle's score equals the sum of constituent journal scores, allowing direct comparison of packages or collection subsets.

## Uses in Science of Science

- Turns [Eigenfactor Score](eigenfactor_score.md) into a collection-level measure for libraries and database audits.
- Supports collection analysis where [journal impact factor](journal_impact_factor.md) and [Article Influence Score](article_influence_score.md) cannot be summed.
- Pairs naturally with [Eigenfactor cost-effectiveness](eigenfactor_cost_effectiveness.md) when subscription prices are available.
- Provides a network-weighted alternative to raw journal counts in [citation-based source selection](../methods/citation_based_source_selection.md).

## Operationalization

- Define the journal bundle, field set, or package being evaluated.
- Map each title to a current Eigenfactor Score after title normalization and coverage checks.
- Sum the Eigenfactor Scores for all included journals.
- Compare bundle influence with subscription cost, field coverage, and local use evidence rather than using influence alone.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) states that Eigenfactor Score is additive: the Eigenfactor of a group of journals is found by summing the scores of each journal.
- The paper gives a top-five-journal example with a summed Eigenfactor of 8.909, interpreted as the model researcher spending about 8.909 percent of time at those journals.
- West et al. explicitly identify this property as useful for collection managers dealing with publisher bundles such as Elsevier's Big Deal.
- The same text contrasts this with impact factor and Article Influence, which are not additive.

## Caveats

- Bundle influence can favor large packages and should be normalized or paired with cost and relevance measures for purchasing decisions.
- Title changes, package definitions, and database coverage can alter bundle membership.
- High bundle influence does not imply local demand, equitable access, or mission fit.

## Links

- [Eigenfactor Score](eigenfactor_score.md)
- [Eigenfactor metrics](eigenfactor_metrics.md)
- [Eigenfactor cost-effectiveness](eigenfactor_cost_effectiveness.md)
- [Article Influence Score](article_influence_score.md)
- [citation-based source selection](../methods/citation_based_source_selection.md)
- [journal citation frequency](journal_citation_frequency.md)
- [responsible metrics](responsible_metrics.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]

## Metadata

- Concept ID: `eigenfactor_bundle_influence`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: bundle Eigenfactor score; additive journal influence; collection Eigenfactor share; package influence score
