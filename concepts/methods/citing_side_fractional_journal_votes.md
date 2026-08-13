# Citing-side fractional journal votes

## Summary

Citing-side fractional journal votes normalize a journal's outgoing citation influence by its reference-list length, so fields with longer bibliographies do not automatically cast more total citation weight.

## Canonical Form

- Unit of analysis: citing journal, cited journal, reference list, citation edge, or random-walk transition.
- Typical representation: each outgoing citation receives a fraction of the citing unit's vote or transition probability.
- Method target: reduce field citation-density bias in journal-level influence measures.
- Empirical signature: a citation from a field with many references per paper contributes less per citation than a citation from a field with short reference lists.

## Uses in Science of Science

- Provides the citing-side normalization intuition behind [journal citation random walk](journal_citation_random_walk.md) and [Eigenfactor metrics](../measures/eigenfactor_metrics.md).
- Offers a journal-level counterpart to [reference-list dilution](../mechanisms/reference_list_dilution.md).
- Helps explain why [Article Influence versus impact-factor divergence](../validations/article_influence_impact_factor_divergence.md) can reduce some field and subfield differences.
- Connects recursive journal metrics to [source normalized impact per paper](../measures/source_normalized_impact_per_paper.md), which also normalizes by citing-side citation density.

## Operationalization

- Build a directed citation matrix from citing journals to cited journals.
- Normalize outgoing citations from each citing source into transition probabilities or fractional votes.
- Combine the fractional votes with recursive citation weighting or a random-walk stationary distribution.
- Report how references, document types, missing links, and dangling journals are handled.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) explains that the Eigenfactor random-walker model uses proportions of citations going to each source rather than absolute citation counts.
- The paper gives the intuition that in a field where papers cite 80 articles, each citation is worth one-eightieth of a vote, while in a field where papers cite 10 articles, each citation is worth one-tenth.
- West et al. use this mechanism to explain why Article Influence reduces some impact-factor bias from reference-list length and field citation density.
- The same evidence links the method to recursive weighting, because a fractional vote from a highly influential journal still carries more recursive influence than a fractional vote from a peripheral journal.

## Caveats

- Fractional outgoing normalization does not eliminate all field differences, especially citation-age, preprint, and review-article differences.
- Journal-level normalization can hide paper-level variation within the same journal.
- The method assumes that all outgoing citation positions have comparable meaning after normalization.
- Missing references or database coverage gaps can distort outgoing fractions.

## Links

- [journal citation random walk](journal_citation_random_walk.md)
- [Eigenfactor metrics](../measures/eigenfactor_metrics.md)
- [Article Influence Score](../measures/article_influence_score.md)
- [Article Influence versus impact-factor divergence](../validations/article_influence_impact_factor_divergence.md)
- [reference-list dilution](../mechanisms/reference_list_dilution.md)
- [source normalized impact per paper](../measures/source_normalized_impact_per_paper.md)
- [JCR 2006 journal citation network](../datasets/jcr_2006_journal_citation_network.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A network approach to assessing scholarly journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]

## Metadata

- Concept ID: `citing_side_fractional_journal_votes`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: fractional citation votes; citing-side vote normalization; outgoing citation dilution; journal reference-list normalization
