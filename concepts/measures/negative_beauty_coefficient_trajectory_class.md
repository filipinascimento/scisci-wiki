# Negative beauty coefficient trajectory class

## Summary

Negative beauty coefficient trajectory class identifies papers whose citation histories peak early or lie above the delayed-recognition reference line, making them the contrast class to sleeping-beauty trajectories.

## Canonical Form

- Unit of analysis: paper, annual citation history, reference line, B score, or early-peaking trajectory.
- Typical representation: nonpositive B flag, negative-B histogram mass, early-peak class, or contrast sample for delayed-recognition analysis.
- Measurement target: distinguish ordinary or early-recognized citation histories from delayed-recognition curves.
- Empirical signature: the observed citation trajectory is concave or above the reference line before the maximum citation year.

## Uses in Science of Science

- Complements the [beauty coefficient](beauty_coefficient.md) by clarifying what low or negative B means.
- Provides a contrast class for [sleeping beauty](../mechanisms/sleeping_beauty.md), [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md), and [post-peak citation decay checks](../validations/post_peak_citation_decay_check.md).
- Helps avoid interpreting every low-B paper as unimportant; low B is about trajectory timing, not final value.
- Supports null-model and benchmark analyses that compare high-B delayed recognition with early-peaking or steady-recognition papers.

## Operationalization

- Compute the beauty coefficient for each paper from annual citation counts and the [citation-history reference line](../representations/citation_history_reference_line.md).
- Label papers with B equal to zero separately from papers with negative B where needed.
- Inspect whether negative B arises from early citation bursts, concave decay, very short observation windows, or data artifacts.
- Compare negative-B papers to high-B papers on field, publication year, total citations, and post-peak decay.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) states that B equals zero when the maximum annual citation count occurs in the publication year or when citations grow linearly with the reference line.
- The same paper states that B is nonpositive for concave citation trajectories.
- Ke et al. illustrate a negative-B paper whose citation history is above the reference line.
- The paper reports that 4.68 percent of APS papers and 6.56 percent of Web of Science papers have negative B values.

## Caveats

- Negative B is a trajectory-shape class, not a claim of low scientific value.
- Very short observation windows can create misleading early-peak labels.
- Review articles, methods papers, and policy-relevant work can peak early for legitimate reasons.
- The class should not be mixed with uncited or low-cited papers without separate citation-volume controls.

## Links

- [beauty coefficient](beauty_coefficient.md)
- [citation-history reference line](../representations/citation_history_reference_line.md)
- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [post-peak citation decay check](../validations/post_peak_citation_decay_check.md)
- [sleeping-beauty null-model gap](../validations/sleeping_beauty_null_model_gap.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `negative_beauty_coefficient_trajectory_class`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: negative B trajectories; nonpositive beauty coefficient; early-peaking citation class; concave citation trajectory class
