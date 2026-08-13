# Bayesian mention-citation estimation

## Summary

Bayesian mention-citation estimation estimates the probability that a paper cites foundational work given that it mentions the topic using a Beta distribution with Jeffreys prior.

## Canonical Form

- Unit of analysis: topic, catchphrase, foundational paper set, mentioning paper, or citation event.
- Typical method: model `p(cite|mention)` as a Beta distribution instead of a raw frequency.
- Measurement target: uncertainty-aware citation visibility conditional on textual mention.
- Empirical signature: estimates and confidence intervals are especially different from raw ratios for small topics.

## Uses in Science of Science

- Provides an estimation protocol for [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md).
- Supports thresholding in [catchphrase-foundational-paper matching](catchphrase_foundational_paper_matching.md).
- Feeds [topic-to-paper hidden-credit allocation](topic_to_paper_hidden_credit_allocation.md).
- Helps quantify uncertainty in [hidden citations](../measures/hidden_citations.md).

## Operationalization

- Count mentioning papers `N_m` for a topic.
- Count papers that both mention the topic and cite foundational work `N_c_m`.
- Estimate `p(cite|mention)` with a Beta distribution using Jeffreys prior.
- Use expectation and interval estimates rather than only `N_c_m / N_m`.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) explicitly models `p(cite|mention)` with a Beta distribution.
- The paper uses Jeffreys prior terms of one half in the numerator and denominator structure.
- It applies this Bayesian estimate throughout the hidden-citation procedure, including conditional probabilities and error bars.

## Caveats

- The Bayesian estimate still depends on correct topic and catchphrase assignment.
- Priors stabilize small counts but do not remove systematic full-text or matching bias.
- Intervals quantify sampling uncertainty, not construct validity.

## Links

- [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md)
- [hidden citations](../measures/hidden_citations.md)
- [catchphrase-foundational-paper matching](catchphrase_foundational_paper_matching.md)
- [topic-to-paper hidden-credit allocation](topic_to_paper_hidden_credit_allocation.md)
- [hidden-citation threshold sensitivity tradeoff](../validations/hidden_citation_threshold_sensitivity_tradeoff.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; SciSciNet: W4396694003; WoS: unknown]

## Metadata

- Concept ID: `bayesian_mention_citation_estimation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: Bayesian p cite given mention; Jeffreys-prior mention citation estimate; hidden-citation Beta estimator
