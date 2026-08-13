# Specialist foundational-paper review protocol

## Summary

Specialist foundational-paper review protocol validates automated catchphrase-to-paper matches by asking domain specialists to infer the foundational paper from candidate catchphrases.

## Canonical Form

- Unit of analysis: catchphrase set, topic, foundational-paper candidate, expert judgment, or matching algorithm output.
- Typical representation: expert-review table, hit rate, manually checked topic sample, or specialist agreement score.
- Validation target: test whether automated hidden-credit matches recover papers that domain experts recognize as foundational.
- Empirical signature: specialists presented with catchphrases independently choose the same foundational papers identified by the algorithm.

## Uses in Science of Science

- Validates [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md).
- Complements [catchphrase-foundational exclusivity](catchphrase_foundational_exclusivity.md) by adding human domain judgment.
- Supports [hidden citations](../measures/hidden_citations.md) when automated topic models are used to allocate credit.
- Generalizes to domain-expert audits of topic labels, eponyms, method names, and discovery phrases.

## Operationalization

- Sample topics, catchphrase lists, or algorithmic matches for manual review.
- Recruit specialists who can recognize foundational work in the target subfield.
- Present catchphrases without forcing experts to inspect the algorithm's preferred paper first.
- Compare specialist choices with automated foundational-paper assignments.
- Report the sample design, expert pool, hit rate, and unresolved disagreements.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) consults specialists in high-energy physics and quantum topics to manually check randomly selected topics.
- The authors report that 9 out of 10 specialist choices of foundational papers were identified by the algorithm.
- The supplementary description states that specialists were presented with catchphrase lists and asked to identify the paper they believed was most fundamental for those catchphrases.

## Caveats

- Specialist samples can be small and may not represent broader community judgments.
- Experts can disagree when catchphrases refer to multiple related foundational works.
- Review protocols should distinguish validating topic coherence from validating credit allocation.

## Links

- [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md)
- [catchphrase-foundational exclusivity](catchphrase_foundational_exclusivity.md)
- [manual topic granularity check](manual_topic_granularity_check.md)
- [community-assigned catchphrases](../mechanisms/community_assigned_catchphrases.md)
- [hidden citations](../measures/hidden_citations.md)
- [topic-to-paper hidden-credit allocation](../methods/topic_to_paper_hidden_credit_allocation.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; SciSciNet: W4396694003; WoS: unknown]

## Metadata

- Concept ID: `specialist_foundational_paper_review_protocol`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: specialist catchphrase audit; expert foundational-paper validation; manual foundational paper review; domain-specialist hidden-citation validation
