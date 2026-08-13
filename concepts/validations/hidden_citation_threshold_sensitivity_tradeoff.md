# Hidden-citation threshold sensitivity tradeoff

## Summary

Hidden-citation threshold sensitivity tradeoff is the validation boundary that stricter catchphrase and foundational-paper thresholds reduce false positives but can miss real hidden citations.

## Canonical Form

- Unit of analysis: catchphrase, latent topic, foundational paper, conditional probability threshold, or hidden-citation count.
- Typical representation: threshold settings compared against false-positive and false-negative risks.
- Validation target: conservative hidden-citation identification.
- Empirical signature: lowering thresholds increases recovered hidden citations while increasing risk of noisy assignments.

## Uses in Science of Science

- Validates [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md).
- Complements [catchphrase-foundational exclusivity](catchphrase_foundational_exclusivity.md).
- Links uncertainty-aware estimates from [Bayesian mention-citation estimation](../methods/bayesian_mention_citation_estimation.md) to operational thresholds.
- Bounds claims from [hidden citations](../measures/hidden_citations.md).

## Operationalization

- Define thresholds for assigning catchphrases to topics and foundational papers to topics.
- Use confidence intervals or lower error bars when deciding whether a pair exceeds a threshold.
- Compare conservative and relaxed settings.
- Report likely false-positive and false-negative consequences.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) states that the method is conservative and designed to minimize false positives.
- The paper notes that lowering thresholds can recover missing hidden citations at the expense of more false positives.
- In the methods, thresholding uses lower error bars from Bayesian conditional-probability estimates to keep assignments conservative.

## Caveats

- Conservative thresholds undercount hidden citations, especially for small topics.
- Relaxed thresholds can merge distinct topics or assign weak catchphrases.
- Sensitivity analysis should be reported before hidden-citation counts are used evaluatively.

## Links

- [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md)
- [catchphrase-foundational exclusivity](catchphrase_foundational_exclusivity.md)
- [Bayesian mention-citation estimation](../methods/bayesian_mention_citation_estimation.md)
- [hidden-citation full-text access barrier](hidden_citation_full_text_access_barrier.md)
- [hidden citations](../measures/hidden_citations.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; SciSciNet: W4396694003; WoS: unknown]

## Metadata

- Concept ID: `hidden_citation_threshold_sensitivity_tradeoff`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: hidden-citation threshold tradeoff; catchphrase threshold sensitivity; conservative hidden-credit detection boundary
