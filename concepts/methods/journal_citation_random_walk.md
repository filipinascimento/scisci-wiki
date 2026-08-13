# Journal citation random walk

## Summary

Journal citation random walk is the method of modeling attention or influence as a walker moving through a journal-to-journal citation network by repeatedly following cited references.

## Canonical Form

- Unit of analysis: journal, journal citation edge, citation matrix, random walker, or transition probability.
- Typical representation: Markov chain, eigenvector centrality, PageRank-like walk, or stationary visit share.
- Method target: estimate journal influence from recursive citation paths rather than from direct counts alone.
- Empirical signature: journals cited by already central journals receive more stationary attention than journals with the same raw citation count from peripheral sources.

## Uses in Science of Science

- Provides the process model behind [Eigenfactor metrics](../measures/eigenfactor_metrics.md) and [Eigenfactor Score](../measures/eigenfactor_score.md).
- Supplies a journal-level analogue to [citation PageRank](../measures/citation_pagerank.md) and [recursive citation weighting](../mechanisms/recursive_citation_weighting.md).
- Converts [journal citation network mapping](../representations/journal_citation_network_mapping.md) into a ranked influence measure.
- Helps compare journal influence while accounting for where citations originate.

## Operationalization

- Build a directed journal citation matrix from citing-journal to cited-journal references.
- Remove or document journal self-citations and dangling-node handling.
- Normalize outgoing citation weights into transition probabilities.
- Iterate the random walk or eigenvector update until the stationary distribution stabilizes.
- Interpret each journal's stationary visit share as a recursive influence score, then run coverage, window, and self-citation checks.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) describes a model researcher who spends unlimited time in a library by selecting a random citation in one journal volume and walking to the cited journal.
- The same full text states that the model researcher frequently visits journals cited by journals that are themselves highly cited.
- West et al. explicitly connect this recursive calculation to eigenvector centrality and Google's PageRank, making the random walk the computational mechanism behind the Eigenfactor algorithm.
- The paper reports that its implementation used a network of 7,600 journals and more than 8.5 million citations from Journal Citation Reports.
- The same workflow normalizes outgoing citation choices as [citing-side fractional journal votes](citing_side_fractional_journal_votes.md) and excludes journal self-citations through [journal self-citation exclusion](../validations/journal_self_citation_exclusion.md).

## Caveats

- A random walk over journal references is a ranking model, not direct evidence of how researchers read.
- Scores depend on the journal set, citation window, transition normalization, and whether journal self-citations are removed.
- The method inherits database coverage limits from Web of Science, Journal Citation Reports, or whichever source supplies the citation matrix.

## Links

- [Eigenfactor metrics](../measures/eigenfactor_metrics.md)
- [JCR 2006 journal citation network](../datasets/jcr_2006_journal_citation_network.md)
- [citing-side fractional journal votes](citing_side_fractional_journal_votes.md)
- [Eigenfactor Score](../measures/eigenfactor_score.md)
- [Article Influence Score](../measures/article_influence_score.md)
- [citation PageRank](../measures/citation_pagerank.md)
- [recursive citation weighting](../mechanisms/recursive_citation_weighting.md)
- [journal citation network mapping](../representations/journal_citation_network_mapping.md)
- [citation networks](../representations/citation_networks.md)
- [journal self-citation rate](../measures/journal_self_citation_rate.md)
- [journal self-citation exclusion](../validations/journal_self_citation_exclusion.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]

## Metadata

- Concept ID: `journal_citation_random_walk`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: Eigenfactor random walk; journal PageRank walk; journal citation Markov chain; model researcher walk
