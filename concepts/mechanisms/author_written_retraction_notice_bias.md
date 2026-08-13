# Author-written retraction notice bias

## Summary

Author-written retraction notice bias is the mechanism by which notices written by the authors of a retracted article can understate misconduct or omit usable cause information.

## Canonical Form

- Unit of analysis: retraction notice, retracted article, author group, journal, cause label, or correction event.
- Typical representation: author-written notice flag, opaque-notice flag, notice-source provenance, or notice-versus-secondary-source comparison.
- Mechanism: authors facing reputational or legal exposure may avoid implicating themselves, making notice-only cause coding biased toward ambiguity, error, or no stated reason.
- Empirical signature: retraction notices written by authors are more likely to be opaque or insufficient for cause classification.

## Uses in Science of Science

- Explains one source of missingness in [retraction notice transparency](../validations/retraction_notice_transparency.md).
- Motivates [retraction source reconciliation](../methods/retraction_source_reconciliation.md), because external investigation reports may reveal causes that notices omit.
- Helps interpret [misconduct retraction share](../measures/misconduct_retraction_share.md) as a lower-bound estimate when notices are author-controlled or underspecified.
- Connects correction governance to broader [retractions and scientific self-correction](../validations/retractions_self_correction.md).

## Operationalization

- Code who wrote or signed each retraction notice when that information is available.
- Separate author-written notices from editor-written, publisher-written, institution-written, and jointly written notices.
- Compare notice transparency, cause specificity, and later source reconciliation by notice author type.
- Preserve both notice-only and reconciled cause labels so the direction of author-written bias can be audited.
- Treat missing notice authorship as a data-quality variable rather than assuming all notices have the same provenance.

## Evidence and Validations

- Verified full-text evidence from Fang, Steen, and Casadevall (2012) reports that many retraction notices are uninformative or opaque, with 119 notices providing no reason for retraction.
- The same paper states that retraction announcements are often written by the retracted authors themselves, who may be reluctant to implicate themselves in misconduct.
- Fang et al. also note that investigations can be lengthy, so notices may be issued before the full results are available.
- This makes notice authorship a mechanism behind cause misclassification, not only a missing-metadata problem.

## Caveats

- Author-written notices are not necessarily deceptive; they may be constrained by incomplete investigations, legal rules, or journal templates.
- Some editor-written notices can also be opaque.
- Notice authorship should be paired with source reconciliation before assigning misconduct intent.

## Links

- [retraction notice transparency](../validations/retraction_notice_transparency.md)
- [retraction source reconciliation](../methods/retraction_source_reconciliation.md)
- [misconduct retraction share](../measures/misconduct_retraction_share.md)
- [retractions and scientific self-correction](../validations/retractions_self_correction.md)
- [retraction cause taxonomies](../methods/retraction_cause_taxonomies.md)
- [unretracted misconduct dark figure](../validations/unretracted_misconduct_dark_figure.md)

## References

- Fang, F. C., Steen, R. G., & Casadevall, A. (2012). Misconduct accounts for the majority of retracted scientific publications. *Proceedings of the National Academy of Sciences*, 109(42), 17028-17033. https://doi.org/10.1073/pnas.1212247109 [OpenAlex: W2097110982; Dimensions: pub.1035913875; SciSciNet: W2097110982; WoS: unknown]

## Metadata

- Concept ID: `author_written_retraction_notice_bias`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Fang et al. (2012) (2012)
- Latest seen paper: Fang et al. (2012) (2012)
- Primary reference DOI: `10.1073/pnas.1212247109`
- OpenAlex ID: `W2097110982`
- Dimensions ID: `pub.1035913875`
- SciSciNet ID: `W2097110982`
- Aliases: author-written notice bias; self-authored retraction notice; opaque author retraction notice; notice authorship bias
